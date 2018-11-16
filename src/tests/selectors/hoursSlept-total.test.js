import hoursSleptTotal from '../../selectors/hoursSlept-total'
import dreams from '../fixtures/dreams'

test('should return 0 if no dreams', () => {
  const res = hoursSleptTotal([])
  expect(res).toBe(0)
})

test('should correctly add up hours slept for a single dream', () => {
  const res = hoursSleptTotal([dreams[0]])
  expect(res).toBe(6)
})

test('should correctly add up hours slept for multiple dreams', () => {
  const res = hoursSleptTotal(dreams)
  expect(res).toBe(21)
})