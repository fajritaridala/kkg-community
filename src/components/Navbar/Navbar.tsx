import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const textMenu = [
    { name: 'beranda', to: '/#' },
    { name: 'keanggotaan', to: '/membership' },
    { name: 'dokumentasi', to: '/documentation' },
  ]
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div
        className={`fixed z-50 flex h-14 w-full items-center-safe justify-between px-6 backdrop-blur-xl md:px-10 ${
          isOpen
            ? 'bg-light/60 shadow-none'
            : isScrolled
              ? 'bg-light/60 shadow-sm'
              : 'bg-white shadow-none'
        }`}
      >
        <h2 className="text-lg font-bold tracking-wide text-foreground md:text-lg md:font-bold">
          KKG
        </h2>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded transition-colors duration-300 active:bg-light-gray"
          >
            {isOpen ? (
              <XMarkIcon className="size-6 text-foreground" />
            ) : (
              <Bars3Icon className="size-6 text-foreground" />
            )}
          </button>
        </div>
      </div>
      {/* mobile menu start */}
      <div
        className={`fixed -top-40 left-0 z-0 mt-14 flex h-1/2 w-full flex-col space-y-4 bg-light/60 py-6 text-lg font-semibold text-foreground capitalize backdrop-blur-xl transition-all duration-500 ease-in-out md:top-0 md:z-50 md:mt-0 md:flex md:h-14 md:flex-row md:justify-end md:gap-8 md:bg-transparent md:px-10 md:py-0 md:text-sm md:font-medium md:backdrop-blur-none ${isOpen ? 'translate-y-40' : '-translate-y-full md:translate-y-0'}`}
      >
        {textMenu.map((item) => (
          <NavHashLink
            title={item.name}
            to={item.to}
            className="border-y border-transparent px-6 py-3 duration-200 active:border-y active:border-light-gray active:bg-gray md:my-auto md:px-0 md:py-0"
          >
            {item.name}
          </NavHashLink>
        ))}
      </div>
      {/* mobile menu end */}
    </nav>
  )
}
