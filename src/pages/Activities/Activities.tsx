import { GalleryCard } from '../../components'
import { Category } from './constants'
import useActivities from './useActivities'

export default function Activities() {
  const { filteredData, isFiltered, activeFilter } = useActivities()

  return (
    <section className="pb-6">
      {/* hero section start */}
      <div className="relative flex flex-col border-b border-gray">
        <div className="relative z-10 space-y-3 bg-light/60 px-6 pt-26 pb-6 text-center backdrop-blur-2xl md:pt-44 md:pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground-dark capitalize md:text-4xl">
            kegiatan kami
          </h1>
          <p className="font-work-sans text-xs leading-relaxed text-foreground first-letter:capitalize md:mx-auto md:w-xl md:pt-3 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            corporis harum. Neque sunt minus numquam similique qui, rerum magnam
            iusto eligendi nesciunt fugiat!
          </p>
          {/* filter section start */}
          <div className="mt-8 flex w-full justify-center-safe gap-4 md:mt-12">
            {Object.values(Category).map((item, index) => (
              <button
                key={index}
                onClick={() => filteredData(item)}
                className={`rounded-full border border-dark px-6 py-1 text-sm font-semibold capitalize transition-colors duration-300 ${activeFilter === item ? 'bg-dark text-light' : 'bg-transparent text-dark active:scale-95 active:bg-gray'} `}
              >
                {item}
              </button>
            ))}
          </div>
          {/* filter section end */}
        </div>
        <div className="absolute z-0 flex h-full w-full items-center justify-center">
          <img
            className="size-64"
            src="/public/ilustration/moments.svg"
            alt="foto"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* content section start */}
      <div className="columns-1 gap-4 px-6 pt-6 md:columns-3 md:gap-6">
        {isFiltered.map((item, index) => (
          <GalleryCard
            key={index}
            src={item.src}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
      {/* content section end */}
    </section>
  )
}
