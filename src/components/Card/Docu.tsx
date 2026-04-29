type PropTypes = {
  title?: string
  category?: string
  year?: string
  description?: string
  img?: string
  alt?: string
}

export default function DocuCard(props: PropTypes) {
  const { title, category, img, year, description, alt } = props

  return (
    <div className="bg-light shadow-sm">
      <div className="h-44 w-full overflow-hidden md:h-56">
        <img
          src={img}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex justify-between">
          <h1 className="text-base font-bold tracking-tight text-primary capitalize">
            {category}
          </h1>
          <p className="text-sm tracking-tight text-foreground-muted capitalize italic">
            {year}
          </p>
        </div>
        <h3 className="text-lg leading-tight font-bold tracking-tight text-foreground capitalize">
          {title}
        </h3>
        <p className="font-work-sans text-sm leading-relaxed text-foreground-muted first-letter:capitalize">
          {description}
        </p>
      </div>
    </div>
  )
}
