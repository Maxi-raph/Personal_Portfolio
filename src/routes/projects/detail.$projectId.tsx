import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/detail/$projectId')({
  component: ProjectDetailsPage,
})

function ProjectDetailsPage() {
  return <div>Hello "/projects/detail/$projectId"!</div>
}
