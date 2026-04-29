import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  index: number
  description: string
}

export default function MissionCard(props: PropTypes) {
  const { icon, index, description } = props
  return (
    <div className="flex flex-col space-y-4 border border-light-gray bg-light p-3 shadow-sm md:p-5">
      <div className="flex items-center-safe gap-4">
        <div className="flex h-10 w-10 items-center-safe justify-center-safe rounded bg-light-gray text-foreground">
          <div className="size-5">{icon}</div>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          Misi {index + 1}
        </h1>
      </div>
      <p className="text-justify font-work-sans text-sm leading-relaxed text-foreground-muted">
        {description}
      </p>
    </div>
  )
}
