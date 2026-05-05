const dateFormat = (rawDate: string): string => {
  const date = new Date(rawDate)
  if (isNaN(date.getDate())) return 'Tanggal tidak valid'

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Makassar',
  }).format(date)
}

const dateStringToNumber = (date: string): number => {
  const months: { [key: string]: number } = {
    januari: 0,
    februari: 1,
    maret: 2,
    april: 3,
    mei: 4,
    juni: 5,
    juli: 6,
    agustus: 7,
    september: 8,
    oktober: 9,
    november: 10,
    desember: 11,
  }

  const parts = date.toLocaleLowerCase().split(' ')
  const day = parseInt(parts[0], 10)
  const month = months[parts[1]]
  const year = parseInt(parts[2], 10)

  const combinedDate = new Date(year, month, day).getTime()
  return combinedDate
}

const driveUrlFormat = (url: string): string => {
  if (!url) return ''

  const idMatch = url.match(/id=([^&]+)/) || url.match(/\/d\/([^/]+)/)
  if (idMatch && idMatch[1]) {
    const fileId = idMatch[1]

    return `https://drive.google.com/thumbnail?id=${fileId}`
  }

  return url
}

const helpers = {
  dateFormat,
  driveUrlFormat,
  dateStringToNumber,
}

export default helpers
