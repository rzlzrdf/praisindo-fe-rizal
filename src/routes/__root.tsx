import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="w-full min-h-svh bg-gradient-to-t pb-[10vh] from-blue-400 to-sky-100">
      <div className="min-w-[50px] w-[25vw] aspect-square rounded-full fixed bg-yellow-300 blur-2xl lg:blur-[100px] top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
      <main className="max-w-[1400px] px-5 mx-auto ">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
});
