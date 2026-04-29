export default function GalleryCard() {
  return (
    <div className="rounded-2xl pb-6 shadow-sm">
      <div className="aspect-video overflow-hidden p-2">
        <img
          src="/public/documentation/les-taylor-3JXByKQVsYI-unsplash.jpg"
          alt="foto"
          className="h-full w-full rounded-xl object-cover object-center"
        />
      </div>
      <div className="space-y-2 px-4 py-2">
        <h2 className="text-lg text-foreground font-bold tracking-tight capitalize">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-sm leading-relaxed text-foreground-light first-letter:capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          temporibus libero reiciendis?
        </p>
        <h3 className="text-end text-xsm text-foreground-muted">
          23 April 2026
        </h3>
      </div>
    </div>
  )
}
