import {
  AcademicCapIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  LightBulbIcon,
  PhoneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const brands = [
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

const missions = [
  {
    icon: <AcademicCapIcon />,
    title: 'berbagi praktik baik',
    description:
      'Berdiskusi secara rutin untuk menemukan solusi atas tantangan mengajar di kelas',
  },
  {
    icon: <LightBulbIcon />,
    title: 'meningkatakan kompetensi',
    description:
      'Memfasilitasi guru dalam penguasaan teknologi pendidikan dan pengembangan diri',
  },
  {
    icon: <Cog6ToothIcon />,
    title: 'menciptakan inovasi',
    description:
      'Merancang metode belajar kreatif agar siswa lebih aktif dan bersemangat',
  },
  {
    icon: <UserGroupIcon />,
    title: 'membangun kekeluargaan',
    description:
      'Mewujudkan lingkungan kerja yang positif, suportif, dan tanpa penghakiman',
  },
]

const latestDocumentations = [
  {
    src: '/documentation/fotografo-samuel-cruz-s816Ch3ji6E-unsplash.jpg',
    alt: 'Dokumentasi keramayan',
    category: 'workshop',
    year: 'januari 2025',
    title: 'pelatihan implementasi kurikulum merdeka',
    description:
      'sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila',
  },
  {
    src: '/documentation/justin-dyer-VF6v5F7BHqM-unsplash.jpg',
    alt: 'Dokumentasi keramayan',
    category: 'workshop',
    year: 'januari 2025',
    title: 'pelatihan implementasi kurikulum merdeka',
    description:
      'sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila',
  },
  {
    src: '/documentation/unsplash.jpg',
    alt: 'Dokumentasi keramayan',
    category: 'workshop',
    year: 'januari 2025',
    title: 'pelatihan implementasi kurikulum merdeka',
    description:
      'sesi intensif pemahaman materi esensial dan proyek penguatan profil pelajar pancasila',
  },
]

const contactUs = [
  {
    icon: <EnvelopeIcon />,
    href: 'mailto:nurhatma56@guru.sd.belajar.id',
    body: 'nurhatma56@guru.sd.belajar.id',
  },
  {
    icon: <PhoneIcon />,
    href: 'https://wa.me/6285242521571',
    body: '+62-852-4252-1571',
  },
]

export { brands, missions, latestDocumentations, contactUs }
