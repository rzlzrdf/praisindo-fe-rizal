import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/news/$slug/")({
  // loader: ({ params }) => fetchPost(params.postId),
  component: RouteComponent,
  staticData: { layout: null },
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return (
    <>
      <div className="py-5">
        <Link to="/" className="text-blue-500 underline">
          Back to Home
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center relative z-30 bg-white rounded-xl">
        {/* Blank layout */}
        <div>Hello "/news/{slug}/"!</div>
      </div>
    </>
  );
}
