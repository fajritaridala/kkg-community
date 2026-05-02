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
}

export default helpers
