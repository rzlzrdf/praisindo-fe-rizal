import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="w-fulls pb-[10vh] min-h-svh bg-blue-50 text-gray-800">
      <div className="max-w-[1400px] px-5 mx-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
