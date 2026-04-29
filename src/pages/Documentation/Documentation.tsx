import { GalleryCard } from '../../components'

export default function Documentation() {
  return (
    <section className="pb-14">
      {/* hero section start */}
      <div className="relative flex flex-col">
        <div className="relative z-10 space-y-3 bg-light/60 px-6 pt-26 pb-6 text-center backdrop-blur-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-primary capitalize">
            dokumentasi
          </h1>
          <p className="text-sm leading-relaxed text-secondary first-letter:capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            repudiandae modi sapiente.
          </p>
          {/* filter section start */}
          <div className="mt-12 flex w-full justify-center-safe gap-4">
            <button className="rounded-full border border-primary bg-primary px-8 py-1 font-semibold text-light capitalize">
              foto
            </button>
            <button className="rounded-full border border-primary px-8 py-1 font-semibold text-primary capitalize">
              video
            </button>
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
      <div className="grid grid-flow-row gap-4 px-6 pt-6">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
      {/* content section end */}
    </section>
  )
}
