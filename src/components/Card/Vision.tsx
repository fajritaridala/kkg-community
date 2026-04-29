type PropTypes = {
  description: string
}

export default function VisionCard(props: PropTypes) {
  const { description } = props

  return (
    <div className="flex flex-col space-y-2 bg-primary p-3 shadow-lg md:px-6 md:py-4">
      <p className="text-center font-work-sans text-sm leading-relaxed font-semibold text-light italic first-letter:capitalize">
        "{description}"
      </p>
    </div>
  )
}
