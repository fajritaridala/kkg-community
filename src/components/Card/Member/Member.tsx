type PropTypes = {
  name: string
  position: string
  src: string
  alt: string
}

export default function MemberCard(props: PropTypes) {
  const { name, position, src, alt } = props

  return (
    <div className="w-full shadow-md">
      <div className="group aspect-square w-full overflow-hidden bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-800">
        <img
          className="h-full w-full object-cover grayscale-75 transition-colors duration-300 ease-in-out group-hover:grayscale-0"
          src={src}
          alt={alt}
        />
      </div>
      <div className="my-6 space-y-2 text-center">
        <h2 className="text-lg font-bold tracking-tight text-foreground capitalize">
          {name}
        </h2>
        <p className="text-sm tracking-wider text-foreground-muted uppercase">
          {position}
        </p>
      </div>
    </div>
  )
}
