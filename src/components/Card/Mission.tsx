import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  index: number
  description: string
}

export default function MissionCard(props: PropTypes) {
  const { icon, index, description } = props
  return (
    <div className="flex flex-col space-y-4 rounded-lg border border-light-gray bg-light p-3 shadow-sm md:p-4">
      <div className="flex items-center-safe gap-4">
        <div className="flex h-10 w-10 items-center-safe justify-center-safe rounded bg-light-gray text-foreground-dark">
          <div className="size-5">{icon}</div>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-foreground-dark">
          Misi {index + 1}
        </h1>
      </div>
      <p className="px-1 text-justify font-work-sans text-xs leading-relaxed text-foreground">
        {description}
      </p>
    </div>
  )
}
