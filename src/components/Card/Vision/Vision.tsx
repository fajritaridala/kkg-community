import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  title: string
  description: string
}

export default function VisionCard(props: PropTypes) {
  const { icon, title, description } = props

  return (
    <div className="flex flex-col space-y-4 rounded-xl bg-gray-50 px-4 py-10 shadow-sm">
      <div className="flex h-10 items-center-safe gap-3 px-6 text-blue-600">
        <div className="size-8">{icon}</div>
        <h1 className="text-3xl font-bold capitalize">{title}</h1>
      </div>
      <p className="px-6 font-work-sans text-lg text-gray-500 capitalize italic">
        "{description}"
      </p>
    </div>
  )
}
