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
      <img src={img} alt={alt} className="object-cover" />
      <div className="space-y-3 p-4">
        <div className="flex justify-between">
          <h1 className="text-base font-bold text-primary capitalize">
            {category}
          </h1>
          <p className="text-sm text-foreground-muted capitalize italic">
            {year}
          </p>
        </div>
        <h3 className="text-lg leading-6 font-bold text-foreground capitalize">
          {title}
        </h3>
        <p className="font-work-sans text-sm text-foreground-muted first-letter:capitalize">
          {description}
        </p>
      </div>
    </div>
  )
}
