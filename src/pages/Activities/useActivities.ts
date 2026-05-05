import { useEffect, useState } from 'react'
import { Category } from './constants'
import type { IMediaStore } from '../../hooks/useMedia'

export default function useActivities(props: IMediaStore) {
  const { fetchActivities, activities } = props
  const [activeFilter, setActiveFilter] = useState<Category>(Category.Picture)

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])

  const isFiltered = activities[activeFilter]

  return { isFiltered, setActiveFilter, activeFilter }
}
