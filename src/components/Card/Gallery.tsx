type PropTypes = {
  src: string
  title: string
  description: string
  date: string
}

export default function GalleryCard(props: PropTypes) {
  const { src, title, description, date } = props

  return (
    <div className="mb-4 w-full rounded-xl pb-4 shadow-sm">
      <div className="aspect-video overflow-hidden p-2">
        <img
          src={src}
          alt={`Dokuementasi ${title}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-lg bg-gray object-cover object-center"
        />
      </div>
      <div className="space-y-1 px-4">
        <h2 className="leading-tight font-semibold tracking-tight text-foreground-dark capitalize md:text-lg">
          {title}
        </h2>
        <h3 className="font-work-sans text-2xs font-semibold tracking-wide text-foreground md:text-xs">
          {date}
        </h3>

        <p className="font-work-sans text-xs leading-relaxed text-foreground first-letter:capitalize">
          {description}
        </p>
      </div>
    </div>
  )
}
