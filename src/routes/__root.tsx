import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-[1400px] px-5 mx-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
