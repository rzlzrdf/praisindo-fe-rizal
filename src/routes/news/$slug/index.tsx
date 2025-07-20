import { createFileRoute } from "@tanstack/react-router";
import DetailNews from '@/features/DetailNews';
export const Route = createFileRoute("/news/$slug/")({
  // loader: ({ params }) => fetchPost(params.postId),
  component: DetailNews,
  staticData: { layout: null },
});
