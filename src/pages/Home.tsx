import {
  AcademicCapIcon,
  Cog6ToothIcon,
  EyeIcon,
  LightBulbIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import VisionCard from '../components/Card/Vision'
import MissionCard from '../components/Card/Mission'
import DocuCard from '../components/Card/Docu'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const brand = [
    {
      name: 'Logo KKG Kecamatan Tinanggea',
      src: '/public/brand/logo-kkg.png',
    },
    {
      name: 'Lambang Tutwuri Handayani',
      src: '/public/brand/tutwuri-handayani.png',
    },
    {
      name: 'Lambang Kabupaten Konawe Selatan',
      src: '/public/brand/Lambang_Kabupaten_Konawe_Selatan.png',
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
    <section className="pt-14">
      {/* hero section start */}
      <div className="flex">
        <div className="relative -z-10 flex flex-col items-center-safe justify-center-safe space-y-6 py-18 text-center md:w-2/3 md:items-start md:justify-start md:px-12 md:text-left">
          {/* blob start */}
          <div className="absolute top-20 left-0 h-40 w-40 rounded-full bg-indigo-300 mix-blend-multiply blur-3xl md:top-0 md:-left-20 md:h-80 md:w-80 md:blur-[9rem]"></div>
          <div className="absolute right-0 bottom-30 h-40 w-40 rounded-full bg-amber-100 mix-blend-multiply blur-3xl md:bottom-10 md:left-20 md:h-52 md:w-52"></div>
          {/* blob end */}

          <div className="flex items-center gap-2 rounded-full border border-gray-50 px-3 py-1 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-red-500 md:h-3 md:w-3"></div>
            <p className="font-work-sans text-sm text-gray-600 capitalize md:text-base">
              komunitas belajar
            </p>
          </div>
          <h1 className="px-3 text-[2.5rem] leading-12 font-extrabold text-gray-800 capitalize md:px-0 md:text-6xl md:leading-18">
            mencerdaskan bangsa{' '}
            <span className="text-blue-600">melalui kolaborasi</span> guru
            kreatif
          </h1>
          <p className="font-work-sans text-sm text-gray-500 md:text-xl">
            Pusat pemberdayaan dan pengembangan profesionalisme guru SD di
            Kecamatan Tinanggea, Kabupaten Konawe Selatan.
          </p>
          <div className="mt-4 rounded bg-blue-600 px-6 py-3 font-bold text-white capitalize transition-transform hover:px-8 md:text-xl">
            <a href="#">hubungi kami</a>
          </div>
        </div>
        <div className="hidden w-1/3 pr-12 md:block">
          <div className="flex h-full w-full">
            <img
              className="object-contain"
              src="/public/brand/logo-kkg.png"
              alt="Logo KKG Kecamatan Tinanggea"
            />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* brand section start */}
      <div className="flex items-center-safe justify-center-safe gap-6 border border-gray-300 bg-gray-100 py-2 md:gap-10 md:py-4">
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
      <div
        id="profile"
        className="flex-row space-y-6 px-6 py-14 md:flex md:gap-10 md:px-12 md:py-16"
      >
        <div className="md:w-1/2 md:space-y-6">
          <div className="capitalize">
            <p className="text-xl font-bold text-blue-600 md:text-2xl">
              tentang kami
            </p>
          </div>
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-3xl leading-11 font-bold text-gray-800 capitalize md:text-5xl md:leading-16 md:font-extrabold">
              membangun sinergi, meningkatkan kompetensi
            </h1>
            <p className="text-justify font-work-sans text-lg leading-8 text-gray-500 md:text-xl md:leading-10">
              Komunitas Belajar adalah ruang kolaborasi progresif yang resmi
              didirikan pada tahun 2022. Komunitas ini hadir sebagai wadah
              interaktif bagi para pendidik untuk saling berbagi pengetahuan,
              mengembangkan keterampilan, dan tumbuh bersama. Sejak awal
              berdirinya, komunitas ini berkomitmen kuat untuk menciptakan
              ekosistem pembelajaran yang inklusif, inovatif, dan relevan dengan
              perkembangan zaman guna mencetak individu-individu yang berdaya
              saing tinggi.
            </p>
          </div>
        </div>

        <div className="grid-cols-2 space-y-8 md:grid md:w-1/2 md:gap-8 md:space-y-0">
          {/* vision section start */}
          <div className="col-span-2">
            <VisionCard
              icon={<EyeIcon />}
              title="visi"
              description="Menjadi wadah kolaborasi pendidik yang inovatif untuk mewujudkan pembelajaran yang bermakna, menyenangkan, dan berpusat pada murid."
            />
          </div>
          {/* vision section end */}

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
      <div className="space-y-8 bg-gray-100 py-14 md:space-y-12 md:py-20">
        <div className="space-y-4 px-6 md:space-y-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 capitalize md:text-5xl">
            kegiatan terkini
          </h1>
          <p className="text-center font-work-sans text-lg text-gray-500 md:text-xl">
            lihat keseruan dan semangat belajar kami di lapangan.
          </p>
        </div>
        <div className="grid-cols-3 space-y-8 px-6 md:grid md:gap-8 md:px-12">
          <DocuCard
            img="/public/documentation/elyssa-dedios-oP9ePzLBX3s-unsplash.jpg"
            alt="Dokumentasi keramayan"
            category="workshop"
            year="januari 2025"
            title="pelatihan implementasi kurikulum merdeka"
            description="sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila"
          />
          <DocuCard
            img="/public/documentation/fotografo-samuel-cruz-s816Ch3ji6E-unsplash.jpg"
            alt="Dokumentasi keramayan"
            category="workshop"
            year="januari 2025"
            title="pelatihan implementasi kurikulum merdeka"
            description="sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila"
          />
          <DocuCard
            img="/public/documentation/justin-dyer-VF6v5F7BHqM-unsplash.jpg"
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
        <div className="rounded-2xl bg-blue-600 px-6 py-8 md:flex md:px-12">
          <div className="space-y-4 md:w-2/3 md:space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-100 capitalize md:text-6xl">
              mari berkolaborasi
            </h1>
            <p className="font-work-sans text-lg text-gray-200 first-letter:capitalize md:text-xl">
              punya pertanyaan seputar kegiatan gugus atau ingin berbagi ilmu
              dengan komunitas kami? kami sangat terbuka untuk berdiskusi.
            </p>
            <div className="gap-6 space-y-3 md:flex md:space-y-0">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100/40 p-2">
                  <EnvelopeIcon className="size-5 text-gray-100" />
                </div>
                <p className="font-work-sans text-gray-100 md:text-lg">
                  kkg.gugus1.tinanggea@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100/40 p-2">
                  <PhoneIcon className="size-5 text-gray-100" />
                </div>
                <p className="font-work-sans text-gray-100 md:text-lg">
                  +62 812 4455 6677
                </p>
              </div>
            </div>
          </div>
          <div className="items-center-safe justify-center-safe md:flex md:w-1/3">
            <div className="flex justify-center py-6">
              <a
                href="#"
                className="rounded-lg bg-gray-100 px-6 py-3 text-lg font-bold text-blue-600 capitalize md:px-12 md:py-6 md:text-2xl"
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
