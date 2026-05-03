import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { DocuCard, MissionCard, VisionCard } from '../../components'
import {
  brands,
  missions,
  latestDocumentations,
  contactUs,
  programContent,
} from './homeConstants'
import { ProgramCard } from '../../components/Card'

export default function Home() {
  return (
    <section className="overflow-hidden pt-14">
      {/* hero section start */}
      <div className="relative mb-18 flex h-146 md:mb-0">
        <div className="absolute flex h-full flex-col items-center-safe justify-center-safe text-center md:static md:items-start md:justify-center md:px-12 md:text-left">
          <div className="flex items-center gap-2 rounded-full px-3 py-1 shadow-md">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <p className="text-xs tracking-tight text-foreground capitalize">
              komunitas belajar
            </p>
          </div>
          <h1 className="my-8 px-3 font-sansita text-4xl leading-tight font-extrabold tracking-wide text-foreground-dark capitalize drop-shadow-lg md:px-0 md:text-5xl">
            Membangun Pendidik Tangguh &{' '}
            <span className="text-primary">Mewujudkan Generasi Unggul</span>
          </h1>
          <p className="mb-10 px-6 text-xs leading-relaxed text-foreground capitalize md:px-0 md:text-sm">
            Wadah kolaborasi progresif bagi guru di Kecamatan Tinanggea untuk
            tumbuh bersama melalui inovasi, praktik baik, dan kekeluargaan.
          </p>
          <a
            href="/activities"
            className="group flex items-center-safe gap-1 rounded bg-primary p-4 text-sm font-medium tracking-tight text-neutral capitalize shadow-lg transition-transform duration-75 active:scale-95 active:shadow-none md:gap-2 md:text-base"
          >
            <p>lihat program kami</p>
            <ArrowRightIcon className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 md:size-5" />
          </a>
        </div>
        <div className="hidden pr-12 md:block">
          <div className="relative flex h-full w-full">
            <img
              className="absolute top-20 scale-130 rotate-180 hue-rotate-300"
              src="/blob.svg"
              alt="background decor"
            />
            <img
              className="relative z-0 object-contain"
              src="/ilustration/undraw_team-collaboration_phnf.svg"
              alt="Logo KKG Kecamatan Tinanggea"
            />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* brand section start */}
      <div className="flex items-center-safe justify-center-safe gap-6 bg-light-gray py-2 md:gap-10 md:py-4">
        {brands.map((item) => (
          <img
            src={item.src}
            alt={item.name}
            className="size-8 w-auto object-cover grayscale transition duration-300 hover:grayscale-0 md:h-14"
          />
        ))}
      </div>
      {/* brand section end */}

      {/* profile section start */}
      <div className="items-start px-6 py-12 md:gap-10 md:px-10">
        <p className="font-semibold tracking-tight text-primary capitalize">
          tentang kami
        </p>
        <div className="w-full md:flex">
          <div className="md:w-1/2 md:space-y-3">
            <h1 className="my-3 font-sansita text-2xl leading-tight font-bold tracking-wide text-foreground-dark capitalize md:text-3xl md:font-extrabold">
              Komunitas Belajar untuk Masa Depan Pendidikan
            </h1>
            <p className="mb-5 text-justify text-xs leading-relaxed text-foreground md:text-sm">
              Resmi didirikan pada tahun 2022, KKG GTK Gugus 1 Kec. Tinanggea
              hadir sebagai ruang kolaborasi interaktif bagi para pendidik. Kami
              berupaya membangun ekosistem pembelajaran yang inklusif dan
              relevan dengan perkembangan zaman guna mencetak individu yang
              berdaya saing tinggi.
            </p>
            <h1 className="mb-3 font-sansita text-2xl leading-tight font-bold tracking-wide text-foreground-dark capitalize md:text-3xl md:font-extrabold">
              mengapa kami ada?
            </h1>
            <p className="mb-6 text-justify text-xs leading-relaxed text-foreground md:text-sm">
              Sesuai dengan amanat UU No. 14 Tahun 2005, kami percaya bahwa
              setiap guru memiliki kewajiban untuk meningkatkan kompetensi
              secara berkelanjutan. KKG hadir sebagai wadah profesional untuk
              menjawab tantangan tersebut melalui pengembangan diri yang sejalan
              dengan kemajuan ilmu pengetahuan dan teknologi.
            </p>
          </div>
          <div className="h-1/2 md:my-auto md:flex md:w-1/2 md:p-8">
            <VisionCard description="Menjadi wadah kolaborasi pendidik yang inovatif untuk mewujudkan pembelajaran yang bermakna, menyenangkan, dan berpusat pada murid" />
          </div>
        </div>
      </div>

      {/* visi & misi start */}
      <div className="mb-12 px-6 md:p-12">
        <h2 className="mb-4 font-semibold tracking-tight text-primary capitalize md:text-lg">
          misi kami
        </h2>

        <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {/* mission section start */}
          {missions.map((item) => (
            <MissionCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
          {/* mission section end */}
        </div>
      </div>
      {/* visi & misi end */}

      {/* program start */}
      <div className="space-y-6 px-6 md:px-12">
        <h2 className="font-sansita text-2xl font-semibold capitalize">
          apa yang kami lakukan?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {programContent.map((item) => (
            <ProgramCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/* program end */}

      {/* documentation section start */}
      <div className="py-12 md:space-y-12">
        <div className="mb-6 px-6 md:px-12">
          <h1 className="mb-1 font-semibold tracking-tight text-primary capitalize md:text-lg">
            kegiatan terkini
          </h1>
          <p className="text-xs leading-relaxed text-foreground first-letter:capitalize md:text-left md:text-sm">
            lihat keseruan dan semangat belajar kami di lapangan.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 md:space-y-0 md:px-12">
          {latestDocumentations.map((item, index) => (
            <DocuCard
              key={index}
              src={item.src}
              alt={item.alt}
              category={item.category}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/* documentation section end */}

      {/* contact section start */}
      <div className="px-6 pb-14 md:px-12 md:py-20">
        <div className="rounded-lg bg-primary px-6 py-8 md:flex md:px-12">
          <div className="space-y-4 md:w-2/3 md:space-y-6">
            <h1 className="font-sansita text-4xl font-bold tracking-wide text-neutral capitalize md:text-4xl">
              mari berkolaborasi
            </h1>
            <p className="text-xs leading-relaxed text-foreground-light first-letter:capitalize md:text-sm">
              punya pertanyaan seputar kegiatan gugus atau ingin berbagi ilmu
              dengan komunitas kami? kami sangat terbuka untuk berdiskusi.
            </p>
            <div className="gap-6 space-y-3 md:flex md:space-y-0">
              {contactUs.map((item) => (
                <a
                  className="flex items-center gap-3"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-lg bg-neutral/20 p-1">
                    <div className="size-4 text-neutral">{item.icon}</div>
                  </div>
                  <p className="text-xs text-neutral md:text-sm">{item.body}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 items-center-safe justify-center-safe md:flex md:w-1/3">
            <div className="flex justify-center py-6">
              <a
                href="https://wa.me/6285242521571"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking- rounded bg-neutral p-3 text-sm font-semibold text-primary capitalize duration-75 active:scale-95 md:px-10 md:py-4 md:text-base"
              >
                hubungi kami
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
    </section>
  )
}
