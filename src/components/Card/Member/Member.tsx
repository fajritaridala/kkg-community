type PropTypes = {
  name: string
  position: string
  src: string
  alt: string
}

export default function MemberCard(props: PropTypes) {
  const { name, position, src, alt } = props

  return (
    <div className="w-full rounded-2xl shadow-sm">
      <div className="h-80 w-full overflow-hidden">
        <img
          className="rounded-t-2xl object-cover object-top grayscale-75 transition-colors duration-300 ease-in-out hover:grayscale-0"
          src={src}
          alt={alt}
        />
      </div>
      <div className="my-6 space-y-2 text-center">
        <h2 className="text-lg font-bold text-foreground capitalize">{name}</h2>
        <p className="text-sm text-foreground-muted capitalize">{position}</p>
      </div>
    </div>
  )
}
