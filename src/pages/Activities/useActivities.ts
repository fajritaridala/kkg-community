import { useEffect, useState } from 'react'
import services, { type IData } from '../../services/api'
import helpers from '../../utils/helpers'
import { Category } from './constants'

export interface ActivityData {
  src: string
  title: string
  date: string
  description: string
}

interface ActivityCategory {
  picture: ActivityData[]
  video: ActivityData[]
}

export default function useActivities() {
  const [isData, setIsData] = useState<ActivityCategory>({
    picture: [],
    video: [],
  })
  const [activeFilter, setActiveFilter] = useState<Category>(Category.Picture)
  const isFiltered = isData[activeFilter]

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const [getPictures, getVideos] = await Promise.all([
          services.getPictures(),
          services.getVideos(),
        ])

        const toActivityData = (item: IData) => ({
          src: helpers.driveUrlFormat(item.unggah_dokumentasi_kegiatan),
          title: item.judul_kegiatan,
          date: helpers.dateFormat(item.tanggal_kegiatan),
          description: item.deskripsi_kegiatan,
        })

        setIsData({
          picture: getPictures.map(toActivityData),
          video: getVideos.map(toActivityData),
        })
      } catch (error) {
        console.error(error)
      }
    }

    fetchActivities()
  }, [])

  const filteredData = (category: Category) => {
    setActiveFilter(category)
  }

  return { filteredData, isFiltered, activeFilter }
}
