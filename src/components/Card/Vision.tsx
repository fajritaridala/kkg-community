type PropTypes = {
  description: string
}

export default function VisionCard(props: PropTypes) {
  const { description } = props

  return (
    <div className="relative flex w-full flex-col rounded-lg bg-primary p-3 font-sansita shadow-md md:px-6 md:py-4">
      <p className="rounded border p-2 text-center text-sm leading-relaxed font-semibold tracking-wide text-light italic first-letter:capitalize md:border-2 md:p-10 md:text-lg">
        {description}
      </p>
      <p className="absolute top-0 left-0 h-8 w-8 rounded-full bg-primary text-center text-4xl text-foreground-light md:top-2 md:h-12 md:w-12 md:text-6xl">
        "
      </p>
      <p className="absolute right-0 bottom-0 h-8 w-8 rounded-full bg-primary text-center text-4xl text-foreground-light md:h-12 md:w-12 md:text-6xl">
        "
      </p>
    </div>
  )
}
