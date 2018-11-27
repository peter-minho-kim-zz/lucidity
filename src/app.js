import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addDream } from './actions/dreams'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()

const now = moment.now()
store.dispatch(addDream({
  title: 'Down the Rabbit Hole',
  entry: 'Alice sits drowsily by a riverbank, bored by the book her older sister reads to her. Out of nowhere, a White Rabbit runs past her, fretting that he will be late. The Rabbit pulls a watch out of his waistcoat pocket and runs across the field and down a hole. Alice impulsively follows the Rabbit and tumbles down the deep hole that resembles a well, falling slowly for a long time. As she floats down, she notices that the sides of the well are covered with cupboards and shelves.',
  hoursSlept: 7,
  dreamType: 'normal',
  createdAt: moment(now), 
  lucidityLevel: 4
}))

store.dispatch(addDream({
  title: 'The Pool of Tears',
  entry: `After finishing the cake that says “EAT ME,” Alice grows to nine feet tall and finds that she can barely get an eye down to the doorway. She begins to cry, and her massive tears form a sizable pool at her feet. The White Rabbit reappears and mutters to himself about keeping a Duchess waiting. Alice attempts to speak to him, but he scuttles away, leaving behind his gloves and fan.`,
  hoursSlept: 10,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(2, 'days'),
  lucidityLevel: 2
}))

store.dispatch(addDream({
  title: 'A Caucus Race and a Long Tale',
  entry: 'Alice and the group of animals land on the bank and focus on getting dry. Alice begins arguing with the Lory, but the Mouse interjects and commands everyone to sit down and listen to a history lesson. The Mouse reasons that the story of William the Conqueror would be best since this story is the driest thing it knows.',
  hoursSlept: 7,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(4, 'days'),
  lucidityLevel: 3
}))

store.dispatch(addDream({
  title: 'The Rabbit Sends in a Little Bill',
  entry: 'The White Rabbit approaches Alice, looking for his gloves and fan. Alice searches dutifully but cannot find them. The White Rabbit mistakes Alice for his housemaid, Mary Ann, and commands her to go to his house and fetch his things. Startled by the Rabbit’s demands, Alice obeys and soon finds his house.',
  hoursSlept: 6,
  dreamType: 'normal',
  createdAt: moment(now).subtract(6, 'days'),
  lucidityLevel: 2
}))

store.dispatch(addDream({
  title: 'Advice from a Caterpillar',
  entry: 'Alice comes across a Caterpillar that is resting on top of a giant mushroom and smoking a hookah pipe. The two stare at each other in silence for a while before the Caterpillar asks Alice, “Who are you?” Alice has trouble explaining who she is to the antagonistic and contemptuous Caterpillar. Dejected, she turns to leave, but the Caterpillar calls her back to recite a poem.',
  hoursSlept: 8,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(8, 'days'),
  lucidityLevel: 5
}))

store.dispatch(addDream({
  title: 'Pig and Pepper',
  entry: 'From the wood, Alice sees a fish in footman’s livery approach the house and knock on the door. A similarly dressed frog answers the door and receives a letter inviting the Duchess to play croquet with the Queen.',
  hoursSlept: 8,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(10, 'days'),
  lucidityLevel: 2
}))

store.dispatch(addDream({
  title: 'A Mad Tea Party',
  entry: 'Alice approaches a large table set under the tree outside the March Hare’s house and comes across the Mad Hatter and the March Hare taking tea. They rest their elbows on a sleeping Dormouse who sits between them. They tell Alice that there is no room for her at the table, but Alice sits anyway. The March Hare offers Alice wine, but there is none. Alice tells the March Hare that his conduct is uncivil, to which he rejoins that it was uncivil of her to sit down without being invited.',
  hoursSlept: 6,
  dreamType: 'normal',
  createdAt: moment(now).subtract(12, 'days'),
  lucidityLevel: 4
}))

store.dispatch(addDream({
  title: 'The Queen’s Croquet Ground',
  entry: 'Alice enters the garden and meets three gardeners in the shape of playing cards. The gardeners Two, Five, and Seven bicker with each other as they paint the white roses on the rose trees red.',
  hoursSlept: 6,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(14, 'days'),
  lucidityLevel: 5
}))

store.dispatch(addDream({
  title: 'The Mock Turtle’s Story',
  entry: 'After the disappearance of the Cheshire Cat, the croquet game starts up again and the Duchess takes Alice’s arm. The two start to walk, and Alice becomes uncomfortable that the Duchess holds her so close. Alice thinks that the Duchess is behaving pleasantly because there isn’t any pepper present.',
  hoursSlept: 7,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(16, 'days'),
  lucidityLevel: 3
}))

store.dispatch(addDream({
  title: 'The Lobster Quadrille',
  entry: 'The Mock Turtle continues to sigh and sob and finally asks Alice if she has ever been introduced to a lobster. Alice almost volunteers that she once tasted one, but checks herself and simply says no. The Mock Turtle and the Gryphon describe the Lobster-Quadrille, a dance where all of the sea animals (except the jellyfish) partner up with the lobsters, advance from the seashore and throw the lobsters out to sea.',
  hoursSlept: 5,
  dreamType: 'normal',
  createdAt: moment(now).subtract(18, 'days'),
  lucidityLevel: 2
}))

// store.dispatch(addDream({
//   title: 'Who Stole the Tarts?',
//   entry: 'Alice arrives in the courtroom and finds the King and Queen of Hearts on their thrones, surrounded by a large crowd of animals and the whole deck of cards. The Knave lies chained before them. Alice surveys the room and takes great pleasure in identifying the various features of a court of law that she has read about.',
//   hoursSlept: 9,
//   dreamType: 'lucid',
//   createdAt: moment(now).subtract(20, 'days'),
//   lucidityLevel: 3
// }))

// store.dispatch(addDream({
//   title: 'Alice’s Evidence',
//   entry: 'Alice jumps to the White Rabbit’s call to the stand. She forgets that she has grown larger and knocks over the jury stand, then scrambles to put all of the jurors back. Alice claims to know “nothing whatever” about the tarts, which the King deems “very important.” The White Rabbit corrects the King, suggesting that he in fact means “unimportant.” The King agrees, muttering the words “important” and “unimportant” to himself.',
//   hoursSlept: 10,
//   dreamType: 'nightmare',
//   createdAt: moment(now).subtract(22, 'days'),
//   lucidityLevel: 3
// }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')) 