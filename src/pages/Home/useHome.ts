import type { IMediaStore } from '../../hooks/useMedia'
import helpers from '../../utils/helpers'

export type PropTypes = Pick<IMediaStore, 'activities'>

export default function useHome(props: PropTypes) {
  const { activities } = props

  const newestSorted = activities.picture.toSorted((a, b) => {
    const dateA = helpers.dateStringToNumber(a.date)
    const dateB = helpers.dateStringToNumber(b.date)
    return dateB - dateA
  })

  const data = newestSorted
  return { data }
}
