import { PICT_API_URL, VIDEO_API_URL } from '../utils/env'

export interface IData {
  unggah_dokumentasi_kegiatan: string
  judul_kegiatan: string
  tanggal_kegiatan: string
  deskripsi_kegiatan: string
}

const services = {
  // getPictures: async () => await api.get('/'),
  getPictures: async (): Promise<IData[]> => {
    try {
      const response = await fetch(PICT_API_URL)
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status} - ${response.statusText}`
        )
      }

      const data = response.json()
      return data
    } catch (error) {
      console.error(`[Fetch API Error]: ${error}`)
      throw error
    }
  },
  getVideos: async (): Promise<IData[]> => {
    try {
      const response = await fetch(VIDEO_API_URL)
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status} - ${response.statusText}`
        )
      }

      const data = response.json()
      return data
    } catch (error) {
      console.error(`[Fetch API Error]: ${error}`)
      throw error
    }
  },
}

export default services
