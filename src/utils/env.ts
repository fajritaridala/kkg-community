const pictApiUrl: string = import.meta.env.VITE_API_PICT_URL
const videoApiUrl: string = import.meta.env.VITE_API_VIDEO_URL

if (!(pictApiUrl && videoApiUrl)) {
  throw new Error(`API URL tidak ditemukan`)
}

const PICT_API_URL: string = pictApiUrl
const VIDEO_API_URL: string = videoApiUrl

export { PICT_API_URL, VIDEO_API_URL }
