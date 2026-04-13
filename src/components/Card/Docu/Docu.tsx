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
    <div className="bg-white rounded-2xl shadow-sm">
      <img src={img} alt={alt} className="object-cover" />
      <div className="space-y-3 p-4">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold text-blue-600 capitalize">
            {category}
          </h1>
          <p className="font-semibold text-gray-600 capitalize italic">
            {year}
          </p>
        </div>
        <h3 className="text-xl font-bold capitalize">{title}</h3>
        <p className="font-work-sans text-gray-500 first-letter:capitalize">
          {description}
        </p>
      </div>
    </div>
  )
}
