import moment from 'moment'

// Get visible dreams based on sorting
const getVisibleDreams = (dreams, { text, sortBy, dreamFilter, startDate, endDate }) => {
  return dreams.filter((dream) => {
    const createdAtMoment = moment(dream.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = dream.title.toLowerCase().includes(text.toLowerCase())

    if (dreamFilter === 'all') {
      return textMatch && startDateMatch && endDateMatch
    } else if (dreamFilter === 'normal') {
      return textMatch && startDateMatch && endDateMatch && dream.dreamType === 'normal'
    } else if (dreamFilter === 'lucid') {
      return textMatch && startDateMatch && endDateMatch && dream.dreamType === 'lucid'
    } else if (dreamFilter === 'nightmare') {
      return textMatch && startDateMatch && endDateMatch && dream.dreamType === 'nightmare'
    }

  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'hoursSlept') {
      return a.hoursSlept < b.hoursSlept ? 1 : -1
    }
  })
}

export default getVisibleDreams