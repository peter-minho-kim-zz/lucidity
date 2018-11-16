export default (dreams) => {
  return dreams
    .map((dream) => dream.hoursSlept)
    .reduce((sum, value) => sum + value, 0)
}