import {
  AcademicCapIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

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

export { brands, missions, latestDocumentations }
