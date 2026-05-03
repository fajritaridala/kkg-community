import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  title: string
  description: string
}

export default function ProgramCard(props: PropTypes) {
  const { description, icon, title } = props
  return (
    <div className="h-full w-full rounded-lg p-4 shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg md:shadow-none">
      <div className="size-12 rounded-lg bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <div className="p-1">
        <h1 className="mb-1 font-sansita text-lg font-semibold tracking-wide text-foreground-dark capitalize">
          {title}
        </h1>
        <p className="text-xs leading-relaxed text-foreground">{description}</p>
      </div>
    </div>
  )
}
