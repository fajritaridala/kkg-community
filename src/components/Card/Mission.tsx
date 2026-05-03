import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  title: string
  description: string
}

export default function MissionCard(props: PropTypes) {
  const { icon, title, description } = props
  return (
    <div
      tabIndex={0}
      className="group relative z-0 flex h-full w-full flex-col justify-center overflow-hidden rounded border border-primary p-3 text-center text-primary shadow-lg md:p-4"
    >
      <div className="mx-auto size-18 p-2">{icon}</div>
      <h1 className="font-semibold tracking-tight capitalize">{title}</h1>
      <p className="absolute bottom-0 left-0 z-10 h-full translate-y-full bg-primary px-2 py-4 text-center text-xs leading-relaxed font-semibold text-foreground-light transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-focus:translate-y-0">
        {description}
      </p>
    </div>
  )
}
