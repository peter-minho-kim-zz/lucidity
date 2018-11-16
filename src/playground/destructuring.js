// const person = {
//   name: 'Peter',
//   age: 29,
//   location: {
//     city: 'Atlanta',
//     temp: 55
//   }
// }

// const { name: firstName = 'Anon', age } = person

// console.log(`${firstName} is ${age} years old.`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//   title: 'Ego',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

const address = []

const [ , , state = 'New York' ] = address

console.log(`You are in ${state}`)

const item = ['coffee', '$2', '$2.5', '$2.75']
const [ product, sm, m, lg ] = item
console.log(`A medium ${product} costs ${m}`)