import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const textMenu = [
    { name: 'beranda', to: '#' },
    { name: 'profil', to: '#profile' },
    { name: 'program', to: '/program' },
    { name: 'dokumentasi', to: '/documentation' },
    { name: 'kontak', to: '/contact' },
  ]
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="fixed z-50 flex h-14 w-full items-center-safe justify-between bg-white/60 px-6 shadow-sm backdrop-blur-xl md:px-10">
        <h2 className="text-lg font-semibold text-blue-600 capitalize md:text-xl md:font-bold">
          kelompok kerja guru
        </h2>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded transition-colors duration-300 active:bg-gray-200"
          >
            {isOpen ? (
              <XMarkIcon className="size-6 text-blue-600" />
            ) : (
              <Bars3Icon className="size-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>
      {/* mobile menu start */}
      <div
        className={`fixed -top-40 left-0 z-0 mt-14 flex w-full flex-col space-y-4 bg-gray-50/60 py-6 text-xl font-semibold text-blue-600 capitalize backdrop-blur-xl transition-all duration-500 ease-in-out md:top-0 md:z-50 md:mt-0 md:flex md:h-14 md:flex-row md:justify-end md:gap-4 md:bg-transparent md:px-10 md:py-0 md:text-lg md:font-medium md:backdrop-blur-none ${isOpen ? 'translate-y-40' : '-translate-y-full md:translate-y-0'}`}
      >
        {textMenu.map((item) => (
          <NavHashLink
            title={item.name}
            to={item.to}
            className="border-y border-transparent px-6 py-3 duration-200 active:border-y active:border-gray-200 active:bg-gray-300 md:my-auto md:px-0 md:py-0"
          >
            {item.name}
          </NavHashLink>
        ))}
      </div>
      {/* mobile menu end */}
    </nav>
  )
}
