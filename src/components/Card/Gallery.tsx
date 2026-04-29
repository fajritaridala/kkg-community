export default function GalleryCard() {
  return (
    <div className="mb-4 inline-block w-full break-inside-avoid rounded-xl pb-4 shadow-sm">
      <div className="aspect-video overflow-hidden p-2">
        <img
          src="/documentation/les-taylor-3JXByKQVsYI-unsplash.jpg"
          alt="foto"
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>
      <div className="space-y-1 px-4">
        <h2 className="leading-tight font-semibold tracking-tight text-foreground-dark capitalize md:text-lg">
          Lorem ipsum dolor sit amet
        </h2>
        <h3 className="text-2xs font-semibold tracking-wide text-foreground md:text-xs font-work-sans">
          23 April 2026
        </h3>

        <p className="text-xs font-work-sans leading-relaxed text-foreground first-letter:capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          temporibus libero reiciendis?
        </p>
      </div>
    </div>
  )
}
