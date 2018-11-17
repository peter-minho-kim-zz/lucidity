const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is my resolved data')
    // resolve('this is my OTHER resolved data')
    reject('something went wrong')
  }, 2000)
})

console.log('before')

promise.then((data) => {
  console.log('1', data)
}).catch((error) => {
  console.log('error:', error)
})

console.log('after')