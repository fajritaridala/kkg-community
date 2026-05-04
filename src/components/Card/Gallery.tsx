import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'

type PropTypes = {
  src: string[]
  title: string
  description: string
  date: string
}

export default function GalleryCard(props: PropTypes) {
  const { src, title, description, date } = props
  const [emblaRef] = useEmblaCarousel({ align: 'center' })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-4 h-fit basis-full rounded-lg pb-4 shadow-sm">
      <div className="relative cursor-grab overflow-hidden p-2">
        <div ref={emblaRef} className="overflow-hidden rounded-lg">
          <div className="flex basis-full touch-pan-y touch-pinch-zoom rounded-lg">
            {src.map((img, index) => (
              <div
                key={index}
                className="flex aspect-video shrink-0 grow-0 basis-full"
              >
                <img
                  src={img}
                  alt={`Dokuementasi ${title}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full bg-gray object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-1 px-4">
        <h2 className="leading-tight font-semibold tracking-tight text-foreground-dark capitalize md:text-lg">
          {title}
        </h2>
        <h3 className="text-2xs font-semibold tracking-wide text-foreground md:text-xs">
          {date}
        </h3>

        <div className="text-xs leading-relaxed text-foreground">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-60' : 'max-h-10 md:max-h-14'}`}
          >
            <p className="first-letter:capitalize">{description}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-foreground-dark first-letter:capitalize"
          >
            {isExpanded ? 'sembunyikan' : 'baca selengkapnya'}
          </button>
        </div>
      </div>
    </div>
  )
}
