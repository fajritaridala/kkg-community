import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  index: number
  description: string
}

export default function MissionCard(props: PropTypes) {
  const { icon, index, description } = props
  return (
    <div className="flex flex-col space-y-6 border border-light-gray p-8">
      <div className="flex items-center-safe gap-4">
        <div className="flex h-10 w-10 items-center-safe justify-center-safe rounded-lg bg-primary text-neutral">
          <div className="size-5">{icon}</div>
        </div>
        <h1 className="text-xl font-bold text-foreground">Misi {index + 1}</h1>
      </div>
      <p className="font-work-sans text-sm text-foreground-muted">
        {description}
      </p>
    </div>
  )
}
