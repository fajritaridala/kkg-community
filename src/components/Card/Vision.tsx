type PropTypes = {
  description: string
}

export default function VisionCard(props: PropTypes) {
  const { description } = props

  return (
    <div className="relative w-full flex flex-col rounded-lg bg-primary p-3 font-sansita shadow-md md:px-6 md:py-4">
      <p className="border p-2 text-center text-sm leading-relaxed font-semibold tracking-wide text-light italic first-letter:capitalize">
        {description}
      </p>
      <p className="absolute top-0 left-0 h-8 w-8 rounded-full bg-primary text-center text-4xl text-foreground-light">
        "
      </p>
      <p className="absolute right-0 bottom-0 h-8 w-8 rounded-full bg-primary text-center text-4xl text-foreground-light">
        "
      </p>
    </div>
  )
}
