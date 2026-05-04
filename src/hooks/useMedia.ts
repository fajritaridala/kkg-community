import { create } from 'zustand'
import type { IData } from '../services/api'
import services from '../services/api'
import helpers from '../utils/helpers'

export interface IMediaData {
  images: string[]
  title: string
  date: string
  description: string
}

export interface IMediaCategory {
  picture: IMediaData[]
  video: IMediaData[]
}

export interface IMediaStore {
  activities: IMediaCategory
  isLoading: boolean
  error: string | null
  fetchActivities: () => Promise<void>
}

const useMedia = create<IMediaStore>((set, get) => ({
  activities: {
    picture: [],
    video: [],
  },
  isLoading: false,
  error: null,
  fetchActivities: async () => {
    if (
      get().activities.picture.length > 0 &&
      get().activities.video.length > 0
    )
      return
    set({ isLoading: true, error: null })

    try {
      const [getPictures, getVideos] = await Promise.all([
        services.getPictures(),
        services.getVideos(),
      ])

      const cleanData = (item: IData) => {
        const urls = item.unggah_dokumentasi_kegiatan
          .split(',')
          .map((url) => helpers.driveUrlFormat(url.trim()))
          .filter(Boolean)

        return {
          images: urls,
          title: item.judul_kegiatan,
          date: helpers.dateFormat(item.tanggal_kegiatan),
          description: item.deskripsi_kegiatan,
        }
      }

      const mediaData = {
        picture: getPictures.map(cleanData),
        video: getVideos.map(cleanData),
      }
      if (Object.keys(mediaData).length < 1) set({ isLoading: true })

      set({ activities: mediaData, isLoading: false })
    } catch (error) {
      console.error(`Fetch failed: ${error}`)
      set({ error: `Data fetching is failed`, isLoading: false })
    }
  },
}))

export default useMedia
