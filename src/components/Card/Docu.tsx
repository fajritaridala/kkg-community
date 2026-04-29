type PropTypes = {
  title?: string
  category?: string
  year?: string
  description?: string
  src?: string
  alt?: string
}

export default function DocuCard(props: PropTypes) {
  const { title, category, src, year, description, alt } = props

  return (
    <div className="rounded-xl bg-light shadow-sm">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-t-xl object-cover object-center"
        />
      </div>
      <div className="space-y-1 p-4 md:pt-2">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold tracking-tight text-primary capitalize">
            {category}
          </h2>
          <p className="text-2xs text-foreground capitalize italic">{year}</p>
        </div>
        <h3 className="leading-tight font-semibold tracking-tight text-foreground-dark capitalize">
          {title}
        </h3>
        <p className="font-work-sans text-xs leading-relaxed text-foreground first-letter:capitalize">
          {description}
        </p>
      </div>
    </div>
  )
}
