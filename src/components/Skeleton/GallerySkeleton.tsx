export default function GalleryCardSkeleton() {
  return (
    <div className="w-full animate-pulse rounded-xl bg-light-gray p-2 shadow-sm">
      <div className="aspect-video rounded-lg bg-gray"></div>
      <div className="space-y-2 p-3">
        <div className="h-4 w-3/4 rounded bg-gray"></div>
        <div className="h-2 w-3/12 rounded bg-gray"></div>
        <div className="h-16 w-full rounded bg-gray"></div>
      </div>
    </div>
  )
}
