import {
  AcademicCapIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import VisionCard from '../components/Card/Vision'
import MissionCard from '../components/Card/Mission'
import DocuCard from '../components/Card/Docu'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const brand = [
    {
      name: 'Logo KKG Kecamatan Tinanggea',
      src: '/brand/logo-kkg.png',
    },
    {
      name: 'Lambang Tutwuri Handayani',
      src: '/brand/tutwuri-handayani.png',
    },
    {
      name: 'Lambang Kabupaten Konawe Selatan',
      src: '/brand/Lambang_Kabupaten_Konawe_Selatan.png',
    },
  ]

  const missionContent = [
    {
      icon: <AcademicCapIcon />,
      description:
        'Rutin mengadakan diskusi untuk berbagi pengalaman dan solusi terkait tantangan mengajar di kelas',
    },
    {
      icon: <LightBulbIcon />,
      description:
        'Memfasilitasi pengembangan diri guru melalui pelatihan, bedah buku, atau pemanfaatan teknologi pendidikan',
    },
    {
      icon: <Cog6ToothIcon />,
      description:
        'Merancang alat peraga dan metode belajar yang kreatif agar siswa lebih aktif dan bersemangat.',
    },
    {
      icon: <UserGroupIcon />,
      description:
        'Menciptakan lingkungan kerja sesama guru yang saling mendukung, positif, dan tanpa penghakiman',
    },
  ]

  return (
    <section className="overflow-hidden pt-14">
      {/* hero section start */}
      <div className="flex h-[92vh] items-center md:mb-18">
        <div className="flex h-4/5 flex-col items-center-safe justify-center-safe space-y-6 text-center md:items-start md:justify-start md:px-12 md:text-left">
          <div className="flex items-center gap-2 rounded-full border border-light px-3 py-1 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <p className="font-work-sans text-sm tracking-tight text-dark-gray capitalize">
              komunitas belajar
            </p>
          </div>
          <h1 className="px-3 text-4xl leading-tight font-extrabold tracking-tight text-foreground capitalize md:px-0 md:text-5xl">
            mencerdaskan bangsa{' '}
            <span className="text-primary">melalui kolaborasi</span> guru
            kreatif
          </h1>
          <p className="font-work-sans text-sm leading-relaxed text-foreground-muted capitalize md:text-base">
            pusat pemberdayaan dan pengembangan profesionalisme guru SD di
            Kecamatan Tinanggea, Kabupaten Konawe Selatan.
          </p>
          <a
            href="#"
            className="my-10 bg-primary px-6 py-3 font-bold tracking-tight text-neutral capitalize"
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
        {brand.map((item) => (
          <img
            src={item.src}
            alt={item.name}
            className="h-12 w-auto object-cover grayscale transition duration-300 hover:grayscale-0 md:h-20"
          />
        ))}
      </div>
      {/* brand section end */}

      {/* profile section start */}
      <div className="flex-row items-start space-y-6 px-6 py-14 md:flex md:gap-10 md:space-y-0 md:px-10">
        <div className="space-y-4 md:w-1/2 md:space-y-8">
          <div className="capitalize">
            <p className="text-lg font-bold tracking-tight text-primary md:text-2xl">
              tentang kami
            </p>
          </div>
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-foreground capitalize md:text-4xl md:font-extrabold">
            membangun sinergi, meningkatkan kompetensi.
          </h1>
          <p className="text-justify font-work-sans text-sm leading-relaxed text-foreground-muted md:text-base">
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
          <div className="py-4 md:py-0">
            <VisionCard description="Menjadi wadah kolaborasi pendidik yang inovatif untuk mewujudkan pembelajaran yang bermakna, menyenangkan, dan berpusat pada murid." />
          </div>
          {/* vision section end */}
        </div>

        <div className="my-auto grid-cols-2 space-y-6 md:grid md:w-1/2 md:gap-6 md:space-y-0">
          {/* mission section start */}
          {missionContent.map((item, index) => (
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
      <div className="space-y-8 bg-light-gray py-14 md:space-y-12 md:py-20">
        <div className="space-y-4 px-6">
          <h1 className="text-center text-2xl font-bold tracking-tight text-foreground capitalize md:text-3xl">
            kegiatan terkini
          </h1>
          <p className="text-center font-work-sans text-sm leading-relaxed text-foreground-muted first-letter:capitalize md:text-base">
            lihat keseruan dan semangat belajar kami di lapangan.
          </p>
        </div>
        <div className="grid-cols-3 space-y-8 px-6 md:grid md:gap-8 md:space-y-0 md:px-12">
          <DocuCard
            img="/documentation/elyssa-dedios-oP9ePzLBX3s-unsplash.jpg"
            alt="Dokumentasi keramayan"
            category="workshop"
            year="januari 2025"
            title="pelatihan implementasi kurikulum merdeka"
            description="sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila"
          />
          <DocuCard
            img="/documentation/fotografo-samuel-cruz-s816Ch3ji6E-unsplash.jpg"
            alt="Dokumentasi keramayan"
            category="workshop"
            year="januari 2025"
            title="pelatihan implementasi kurikulum merdeka"
            description="sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila"
          />
          <DocuCard
            img="/documentation/justin-dyer-VF6v5F7BHqM-unsplash.jpg"
            alt="Dokumentasi keramayan"
            category="workshop"
            year="januari 2025"
            title="pelatihan implementasi kurikulum merdeka"
            description="sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila"
          />
        </div>
      </div>
      {/* documentation section end */}

      {/* contact section start */}
      <div className="px-6 py-14 md:px-12 md:py-20">
        <div className="bg-primary px-6 py-8 md:flex md:px-12">
          <div className="space-y-4 md:w-2/3 md:space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral capitalize md:text-4xl">
              mari berkolaborasi
            </h1>
            <p className="font-work-sans text-sm leading-relaxed text-light-gray first-letter:capitalize md:text-base">
              punya pertanyaan seputar kegiatan gugus atau ingin berbagi ilmu
              dengan komunitas kami? kami sangat terbuka untuk berdiskusi.
            </p>
            <div className="gap-6 space-y-3 md:flex md:space-y-0">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-secondary/40 p-2">
                  <EnvelopeIcon className="size-3 text-neutral" />
                </div>
                <p className="font-work-sans text-sm text-neutral md:text-base">
                  kkg.gugus1.tinanggea@gmail.com
                </p>
              </div>
              <a
                href="https://wa.me/6285242521571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <div className="rounded-lg bg-secondary/40 p-2">
                  <PhoneIcon className="size-3 text-neutral" />
                </div>
                <p className="font-work-sans text-sm text-neutral md:text-base">
                  +62 852 4252 1571
                </p>
              </a>
            </div>
          </div>
          <div className="mt-4 items-center-safe justify-center-safe md:flex md:w-1/3">
            <div className="flex justify-center py-6">
              <a
                href="#"
                className="bg-neutral px-6 py-3 font-bold tracking-tight text-primary capitalize md:px-10 md:py-4 md:text-lg"
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
