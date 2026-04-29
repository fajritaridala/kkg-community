import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative justify-between overflow-hidden bg-dark pb-6 md:flex md:pb-3">
      <div className="relative z-10 w-full flex-wrap md:flex">
        <div className="w-full justify-between space-y-8 px-6 pt-12 pb-6 md:mb-14 md:flex md:space-y-0 md:px-12 md:pt-22 md:pb-0">
          <div className="space-y-8 md:space-y-6">
            <div className="flex items-center-safe justify-center-safe gap-3 md:justify-start">
              <img
                className="size-8 rounded-md border bg-light p-1 md:size-10"
                src="/brand/logo-kkg.png"
                alt="Logo KKG Tinanggea"
              />
              <h2 className="text-lg font-bold tracking-tight text-foreground-light md:text-xl">
                KKG Gugus 1 R. A. Kartini
              </h2>
            </div>
            <p className="text-center font-work-sans text-xs leading-relaxed text-foreground-muted first-letter:capitalize md:w-sm md:text-left md:text-sm">
              meningkatkan kualitas pendidikan dasar di kecamatan tinanggea,
              sulawesi tenggara
            </p>
          </div>
          <div className="flex flex-col text-xs md:text-sm leading-relaxed font-semibold text-foreground-muted capitalize md:flex-row md:items-end-safe md:gap-12">
            <Link
              to="/#"
              className="flex items-center-safe justify-between hover:underline"
            >
              <p>kebijakan privasi</p>
              <ChevronRightIcon className="size-4 md:hidden" />
            </Link>
            <Link
              to="/#"
              className="flex items-center-safe justify-between hover:underline"
            >
              <p>syarat & ketentuan</p>
              <ChevronRightIcon className="size-4 md:hidden" />
            </Link>
            <Link
              to="/#"
              className="flex items-center-safe justify-between hover:underline"
            >
              <p>peta situs</p>
              <ChevronRightIcon className="size-4 md:hidden" />
            </Link>
          </div>
        </div>
        <div className="w-full px-6 md:px-12">
          <p className="border-t pt-6 text-center text-2xs text-foreground">
            &copy; 2026 KKG Gugus 1 R. A. Kartini. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute top-10 -left-10 z-0 h-36 w-36 rounded-full bg-purple-900 opacity-80 blur-3xl md:-top-20 md:left-60 md:h-72 md:w-72 md:blur-[120px]" />
      <div className="absolute right-0 bottom-0 z-0 h-28 w-28 rounded-full bg-amber-900 opacity-80 blur-3xl md:right-60 md:-bottom-20 md:h-64 md:w-64 md:blur-[120px]" />
    </footer>
  )
}
