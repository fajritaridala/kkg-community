import { useEffect, useState } from 'react'
import { Category } from './constants'
import type { IMediaCategory } from '../../hooks/useMedia'

type PropTypes = {
  fetchActivities: () => void
  activities: IMediaCategory
}

export default function useActivities(props: PropTypes) {
  const { fetchActivities, activities } = props
  const [activeFilter, setActiveFilter] = useState<Category>(Category.Picture)

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])

  const isFiltered = activities[activeFilter]

  return { isFiltered, setActiveFilter, activeFilter }
}
