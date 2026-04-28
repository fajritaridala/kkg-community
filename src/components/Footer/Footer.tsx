import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="justify-between bg-dark pb-6 md:flex md:pb-0">
      <div className="space-y-8 px-6 py-10 md:space-y-6 md:px-12">
        <div className="flex items-center-safe gap-3">
          <img
            className="size-8 rounded-md border bg-light p-1"
            src="/brand/logo-kkg.png"
            alt="Logo KKG"
          />
          <h2 className="text-base font-bold tracking-tight text-light md:text-lg">
            KKG Gugus 1 R. A. Kartini
          </h2>
        </div>
        <p className="text-center font-work-sans text-sm leading-relaxed text-light first-letter:capitalize md:w-sm md:text-left md:text-base">
          meningkatkan kualitas pendidikan dasar di kecamatan tinanggea,
          sulawesi tenggara
        </p>
        <p className="text-center font-work-sans text-sm leading-relaxed tracking-tight text-gray md:text-left">
          &copy; 2026 KKG Gugus 1 R. A. Kartini. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-2 px-6 text-sm tracking-tight text-light-gray capitalize md:gap-10 md:pr-12">
        <Link to="/#">kebijakan privasi</Link>
        <Link to="/#">syarat dan ketentuan</Link>
        <Link to="/#">peta situs</Link>
      </div>
    </footer>
  )
}
