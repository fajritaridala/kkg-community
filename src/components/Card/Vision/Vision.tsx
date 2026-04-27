import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  title: string
  description: string
}

export default function VisionCard(props: PropTypes) {
  const { icon, title, description } = props

  return (
    <div className="flex flex-col space-y-2 bg-light px-4 py-10">
      <div className="flex h-10 items-center-safe gap-3 px-6 text-primary">
        <div className="size-6">{icon}</div>
        <h1 className="text-lg font-bold capitalize">{title}</h1>
      </div>
      <p className="px-6 font-work-sans text-sm text-foreground-muted capitalize italic">
        "{description}"
      </p>
    </div>
  )
}
