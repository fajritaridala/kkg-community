import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { DocuCard, MissionCard, VisionCard } from '../../components'
import { brands, missions, latestDocumentations } from './homeConstants'

export default function Home() {
  return (
    <section className="overflow-hidden pt-14">
      {/* hero section start */}
      <div className="flex h-[92vh] items-center md:mb-18">
        <div className="flex h-4/5 flex-col items-center-safe justify-center-safe space-y-6 text-center md:items-start md:justify-start md:px-12 md:text-left">
          <div className="flex items-center gap-2 rounded-full border-t border-light px-3 py-1 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <p className="font-work-sans text-xs tracking-tight text-foreground capitalize">
              komunitas belajar
            </p>
          </div>
          <h1 className="px-3 text-4xl leading-tight font-extrabold tracking-tight text-foreground-dark capitalize md:px-0 md:text-5xl">
            mencerdaskan bangsa{' '}
            <span className="text-primary">melalui kolaborasi</span> guru
            kreatif
          </h1>
          <p className="px-6 font-work-sans text-xs leading-relaxed text-foreground capitalize md:px-0 md:text-sm">
            pusat pemberdayaan dan pengembangan profesionalisme guru SD di
            Kecamatan Tinanggea, Kabupaten Konawe Selatan.
          </p>
          <a
            href="#"
            className="my-10 rounded-lg bg-primary px-6 py-3 text-sm font-bold tracking-tight text-neutral capitalize md:text-base"
          >
            hubungi kami
          </a>
        </div>
        <div className="hidden pr-12 md:block">
          <div className="relative flex h-full w-full">
            <img
              className="absolute -top-20 scale-130 rotate-180 hue-rotate-300"
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
      <div className="flex-row items-start space-y-4 px-6 py-8 md:flex md:gap-10 md:space-y-0 md:px-10">
        <div className="space-y-2 md:w-1/2 md:space-y-3">
          <p className="font-bold tracking-tight text-primary capitalize md:text-lg">
            tentang kami
          </p>
          <h1 className="text-lg leading-tight font-bold tracking-tight text-foreground-dark capitalize md:text-4xl md:font-extrabold">
            membangun sinergi, meningkatkan kompetensi.
          </h1>
          <p className="text-justify font-work-sans text-xs leading-relaxed text-foreground md:text-sm">
            Komunitas Belajar adalah ruang kolaborasi progresif yang resmi
            didirikan pada tahun 2022. Komunitas ini hadir sebagai wadah
            interaktif bagi para pendidik untuk saling berbagi pengetahuan,
            mengembangkan keterampilan, dan tumbuh bersama. Sejak awal
            berdirinya, komunitas ini berkomitmen kuat untuk menciptakan
            ekosistem pembelajaran yang inklusif, inovatif, dan relevan dengan
            perkembangan zaman guna mencetak individu-individu yang berdaya
            saing tinggi.
          </p>
          {/* vision section start */}
          <div className="py-3 md:py-0">
            <VisionCard description="Menjadi wadah kolaborasi pendidik yang inovatif untuk mewujudkan pembelajaran yang bermakna, menyenangkan, dan berpusat pada murid." />
          </div>
          {/* vision section end */}
        </div>

        <div className="my-auto grid-cols-2 space-y-4 md:grid md:w-1/2 md:gap-4 md:space-y-0">
          {/* mission section start */}
          {missions.map((item, index) => (
            <MissionCard
              icon={item.icon}
              index={index}
              description={item.description}
            />
          ))}
          {/* mission section end */}
        </div>
      </div>

      {/* documentation section start */}
      <div className="space-y-8 bg-light-gray py-8 md:space-y-12 md:py-12">
        <div className="space-y-1 px-6 md:space-y-2">
          <h1 className="text-center text-xl font-bold tracking-tight text-foreground-dark capitalize md:text-2xl">
            kegiatan terkini
          </h1>
          <p className="text-center font-work-sans text-xs leading-relaxed text-foreground first-letter:capitalize md:text-sm">
            lihat keseruan dan semangat belajar kami di lapangan.
          </p>
        </div>
        <div className="grid-cols-3 gap-4 space-y-4 px-6 md:grid md:space-y-0 md:px-12">
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
      <div className="px-6 py-14 md:px-12 md:py-20">
        <div className="rounded-2xl bg-primary px-6 py-8 md:flex md:px-12">
          <div className="space-y-4 md:w-2/3 md:space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral capitalize md:text-4xl">
              mari berkolaborasi
            </h1>
            <p className="font-work-sans text-xs leading-relaxed text-foreground-light first-letter:capitalize md:text-sm">
              punya pertanyaan seputar kegiatan gugus atau ingin berbagi ilmu
              dengan komunitas kami? kami sangat terbuka untuk berdiskusi.
            </p>
            <div className="gap-6 space-y-3 md:flex md:space-y-0">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral/20 p-1">
                  <EnvelopeIcon className="size-4 text-neutral" />
                </div>
                <p className="font-work-sans text-xs text-neutral md:text-sm">
                  kkg.gugus1.tinanggea@gmail.com
                </p>
              </div>
              <a
                href="https://wa.me/6285242521571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <div className="rounded-lg bg-neutral/20 p-1">
                  <PhoneIcon className="size-4 text-neutral" />
                </div>
                <p className="font-work-sans text-xs text-neutral md:text-sm">
                  +62 852 4252 1571
                </p>
              </a>
            </div>
          </div>
          <div className="mt-4 items-center-safe justify-center-safe md:flex md:w-1/3">
            <div className="flex justify-center py-6">
              <a
                href="https://wa.me/6285242521571"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking- rounded-lg bg-neutral px-6 py-3 text-sm font-bold text-primary capitalize md:px-10 md:py-4 md:text-base"
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
