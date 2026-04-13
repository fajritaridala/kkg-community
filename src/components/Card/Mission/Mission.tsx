import type { ReactNode } from 'react'

type PropTypes = {
  icon: ReactNode
  index: number
  description: string
}

export default function MissionCard(props: PropTypes) {
  const { icon, index, description } = props
  return (
    <div className="flex flex-col space-y-6 rounded-lg border border-gray-200 p-8">
      <div className="flex items-center-safe gap-4">
        <div className="flex h-16 w-16 items-center-safe justify-center-safe rounded-lg bg-blue-600 text-white">
          <div className="size-7">{icon}</div>
        </div>
        <h1 className="text-2xl font-bold">Misi {index + 1}</h1>
      </div>
      <p className="font-work-sans text-base text-gray-500">{description}</p>
    </div>
  )
}
