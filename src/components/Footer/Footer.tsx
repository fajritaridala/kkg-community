import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="justify-between bg-gray-800 pb-6 md:flex md:pb-0">
      <div className="space-y-4 px-6 py-14 md:space-y-6 md:px-12">
        <div className="flex items-center-safe gap-3">
          <img
            className="size-12 rounded-md border bg-gray-100 p-1"
            src="/brand/logo-kkg.png"
            alt="Logo KKG"
          />
          <h2 className="text-[1.4rem] font-bold text-gray-100 md:text-2xl">
            KKG Gugus 1 R. A. Kartini
          </h2>
        </div>
        <p className="text-center font-work-sans text-lg text-gray-100 capitalize md:w-sm md:text-left md:text-xl">
          meningkatkan kualitas pendidikan dasar di kecamatan tinanggea,
          sulawesi tenggara
        </p>
        <p className="text-center font-work-sans text-gray-500 md:text-lg">
          &copy; 2026 KKG Gugus 1 R. A. Kartini. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-2 px-6 text-sm md:gap-8 md:pr-12 md:text-lg">
        <Link to="/#" className="text-gray-300 capitalize">
          kebijakan privasi
        </Link>
        <Link to="/#" className="text-gray-300 capitalize">
          syarat dan ketentuan
        </Link>
        <Link to="/#" className="text-gray-300 capitalize">
          peta situs
        </Link>
      </div>
    </footer>
  )
}
