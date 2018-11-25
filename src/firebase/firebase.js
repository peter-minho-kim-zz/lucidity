// import * as firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyBCtULE5lkKUPkiMjJtROebrVPxDDD6c0c",
//   authDomain: "lucidity-app-db.firebaseapp.com",
//   databaseURL: "https://lucidity-app-db.firebaseio.com",
//   projectId: "lucidity-app-db",
//   storageBucket: "",
//   messagingSenderId: "731561970120"
// }

// firebase.initializeApp(config)

// const database = firebase.database()

// database.ref().set({
//   name: 'Peter Kim',
//   age: 29,
//   stressLevel: 8,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Atlanta',
//     state: 'Georgia'
//   }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('this failed', e)
// })

// database.ref().update({
//   stressLevel: 10,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data was removed')
//   })
//   .catch((e) => {
//     console.log('did not remove data', e)
//   })