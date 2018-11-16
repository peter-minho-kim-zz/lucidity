import moment from 'moment'

export default [{
  id: '1',
  title: 'dream one',
  entry: 'this is dream one entry',
  hoursSlept: 6,
  dreamType: 'normal',
  createdAt: 0
}, {
  id: '2',
  title: 'dream two',
  entry: 'this is dream two entry',
  hoursSlept: 7,
  dreamType: 'lucid',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  title: 'dream three',
  entry: 'this is dream three entry',
  hoursSlept: 8,
  dreamType: 'nightmare',
  createdAt: moment(0).add(4, 'days').valueOf()
}]