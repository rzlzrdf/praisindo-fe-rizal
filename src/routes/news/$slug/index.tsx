import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/$slug/')({
  // loader: ({ params }) => fetchPost(params.postId),
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  return <div>Hello "/news/{slug}/"!</div>
}
