import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

type PropTypes = {
  src: string[]
  title: string
  description: string
  date: string
}

export default function GalleryCard(props: PropTypes) {
  const { src, title, description, date } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: true })
  const [isExpanded, setIsExpanded] = useState(false)

  const goToPrev = () => (emblaApi as EmblaCarouselType)?.scrollPrev()
  const goToNext = () => (emblaApi as EmblaCarouselType)?.scrollNext()

  return (
    <div className="mb-4 h-fit basis-full rounded-lg pb-4 shadow-sm md:shadow-none">
      <div className="group relative cursor-grab overflow-hidden p-2">
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

        <div className="absolute top-0 hidden h-full w-1 items-center-safe md:flex">
          <button
            onClick={goToPrev}
            className="ml-2 cursor-pointer rounded-full p-1 ring-gray/30 duration-75 active:bg-gray/50 active:ring-4"
          >
            <ChevronLeftIcon className="size-8 rounded-full bg-gray/40 p-1 text-dark/80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:bg-gray/60 hover:text-dark/60" />
          </button>
        </div>
        <div className="absolute top-0 right-2 hidden h-full w-12 items-center-safe md:flex">
          <button
            onClick={goToNext}
            className="cursor-pointer rounded-full p-1 ring-gray/30 duration-75 active:bg-gray/50 active:ring-4"
          >
            <ChevronRightIcon className="size-8 rounded-full bg-gray/40 p-1 text-dark/80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:bg-gray/60 hover:text-dark/60" />
          </button>
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
