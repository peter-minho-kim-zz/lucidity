import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addDream } from './actions/dreams'
import { setDreamFilter, setTextFilter } from './actions/filters'
import getVisibleDreams from './selectors/dreams'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()


const now = moment.now()
store.dispatch(addDream({
  title: 'Empty Cell Mystery',
  entry: `Andy is put in a cell with a dirt floor and only one window. 
          The window is too high for him to reach. The only thing in the 
          cell is a shovel. He won’t be able to get any food or water and 
          only has two days to escape or he’ll die. Andy can’t dig a 
          tunnel because it will take him much longer than two days to do 
          it. How will Andy escape from the cell? `,
  hoursSlept: 7,
  dreamType: 'normal',
  createdAt: moment(now)
}))

store.dispatch(addDream({
  title: 'Poisonous Drinks',
  entry: `Marissa and Juliana went out for drinks together. 
          They ordered the same drink. Juliana was really thirsty 
          and finished five in the time it took Marissa to finish one. 
          The drinks were poisoned, but only Marissa died. How?`,
  hoursSlept: 10,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(2, 'days')
}))

store.dispatch(addDream({
  title: 'Suicide or Not?',
  entry: `A dead female body lies at the bottom of a multistory 
          building. It looks as though she committed suicide by jumping 
          from one of the floors. When the detective arrives, he goes to 
          the first floor of the building, opens the closed window, and 
          flips a coin towards the floor. He goes to the second floor and 
          does the exact same thing. He continues to do this until he gets 
          to the top floor of the building. When he comes back down, he 
          states that it was a murder and not a suicide. How does he know 
          that?`,
  hoursSlept: 7,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(4, 'days')
}))

store.dispatch(addDream({
  title: 'Love at a Funeral',
  entry: `A girl is at the funeral of her mother. She meets a nice guy that 
          she didn’t know who also was at the funeral and they hit it off. 
          She was busy at the funeral and didn’t have time to ask him for his 
          number before he left. She tried really hard to track him down, but 
          no one knew who he was or how to contact him. A few days later her 
          sister dies and the police suspect it to be a murder. Who killed 
          her sister?`,
  hoursSlept: 6,
  dreamType: 'normal',
  createdAt: moment(now).subtract(6, 'days')
}))

store.dispatch(addDream({
  title: 'Stolen Ring',
  entry: `Nicole went to the police to report that someone had stolen her vintage 
          ring. When the police got to her house they notice that the window was 
          broken, there was a total mess inside, and there were dirty footprints 
          on the carpet. But, there were no other signs of a break-in. The next 
          day, the police arrested Nicole for fraud. Why?`,
  hoursSlept: 8,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(8, 'days')
}))

store.dispatch(addDream({
  title: 'Thief at Sea',
  entry: `A Japanese ship was leaving the port and on its way to open sea. The 
          captain went to go oil some parts of the ship and took his ring off so 
          it wouldn’t get damaged. He left it on the table next to his bunk. When 
          he returned, it was missing. He had suspected three crew members could be 
          guilty and asked them what they had been doing for the ten minutes that he 
          had been gone. The cook said, “I was in the kitchen preparing tonight’s 
          dinner.” The engineer said, “I was working in the engine room making sure 
          everything was running smoothly.” The seaman said, “I was on the mast 
          correcting the flag because someone had attached it upside down by mistake.” 
          The captain immediately knew who it was. How?`,
  hoursSlept: 8,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(10, 'days')
}))

store.dispatch(addDream({
  title: 'Murder at School',
  entry: `On the first day of school, someone murdered a history teacher. There were 
          four people at the school that the police suspected had done it: the landscaper, 
          a math teacher, a basketball coach, and the principal. These were their alibis: 
          The landscaper said he was outside mowing the lawn. The math teacher said he 
          was giving a mid-year test. The basketball coach said he was running practice 
          drills with his players. The principal said she was in her office. After giving 
          their alibies, the police arrested the killer immediately. Who killed the history 
          teacher and how did the police know?`,
  hoursSlept: 6,
  dreamType: 'normal',
  createdAt: moment(now).subtract(12, 'days')
}))

store.dispatch(addDream({
  title: 'Poisonous Pills',
  entry: `A serial killer kidnapped five different people and sat them down each with two 
          pills in their hand and a glass of water. He told them each to take one pill but 
          warned them that one was poisonous and the other was harmless. Whichever pill 
          the victim didn’t take, the serial killer would take. Every victim somehow chose 
          the poisonous pill and died. How did the serial killer get them all to take the 
          poisonous pill?`,
  hoursSlept: 6,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(14, 'days')
}))

store.dispatch(addDream({
  title: 'Honeymoon Mystery',
  entry: `A couple went to Hawaii for their honeymoon. Unfortunately, the husband returned 
          home alone because his wife had died in a horrible boating accident. The police contacted 
          the travel agent he booked the trip with and arrested him for murdering his wife. How did 
          they know he did it?`,
  hoursSlept: 7,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(16, 'days')
}))

store.dispatch(addDream({
  title: 'Science Case',
  entry: `A chemist was murdered in his own lab. The only evidence was a piece of paper that had 
          the names of chemical substances written on it. The substances were nickel, carbon, oxygen, 
          lanthanum, and sulfur. The chemist only had three people come by his lab on the day of the murder: 
          fellow scientist Claire, his nephew Nicolas, his wife, and his friend Marc. The police arrested 
          the murderer right away. How did they know who it was?`,
  hoursSlept: 5,
  dreamType: 'normal',
  createdAt: moment(now).subtract(18, 'days')
}))

store.dispatch(addDream({
  title: 'Recorded Last Words',
  entry: `A man was found on the floor dead with a cassette recorder in one hand and a gun in 
          the other. When the police arrive at the scene they pressed play on the recorder. It was 
          the man’s voice. He said, “I have nothing else to live for. I can’t go on,” followed by the 
          sound of a gunshot. After listening, the police knew that this was a murder, not a suicide. 
          How?`,
  hoursSlept: 9,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(20, 'days')
}))

store.dispatch(addDream({
  title: 'Guilty in Court',
  entry: `A woman was in court for killing her husband. She said she wasn’t guilty and that 
          she dearly missed him. In the closing statement, the woman’s lawyer stands up and says, 
          “Her husband was just missing. Everyone look at the doors. He’s going to walk through them 
          in about 30 seconds.” The entire jury stares at the doors waiting for waiting for this woman’s 
          husband to walk through the doors. The lawyer and the woman stare at the jury. The lawyer 
          concludes by saying, “See! If you were so sure she killed her husband, you wouldn’t be watching 
          that door!” The jury immediately gave a guilty verdict. Why?`,
  hoursSlept: 10,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(22, 'days')
}))

store.dispatch(addDream({
  title: 'Romantic Journey',
  entry: `Mr. and Mrs. Clyde went on a trip to the mountains. But 2 days later, Mr. Clyde 
          returned home alone. He went to the police and said that Mrs. Clyde had fallen to her death. 
          The next day, Detective Stevens visited Mr. Clyde and arrested him for his wife’s murder. 
          Clyde confessed his guilt and asked the detective how he’d found out he was the murderer. 
          Stevens said he’d simply called a travel agent and asked for some information. What did the 
          travel agent say to the detective?`,
  hoursSlept: 10,
  dreamType: 'normal',
  createdAt: moment(now).subtract(24, 'days')
}))

store.dispatch(addDream({
  title: 'Climbing Trip',
  entry: `A couple went on for a climbing trip. But only the husband returned from the 
          vacation and said that his wife slipped off while climbing and died. On investigating, 
          the local sheriff arrested him saying, “Your travel agent called. You murdered your wife.” 
          The man did not inform anyone about the trip. Then how did the agent was so sure that it 
          is a murder?`,
  hoursSlept: 5,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(26, 'days')
}))

store.dispatch(addDream({
  title: 'Who Stole the Money',
  entry: `A man placed a $100 dollar bill on his desk and left for work. When he 
          returned back the money was gone. He has three suspects: the cook, the maid and 
          the electrician. The cook said he put the bill under a book on his desk to keep 
          it safe. The man checked and it is no longer there. The maid said she moved the 
          bill to the inside of the book between page 1 and 2 while she was cleaning. Again, 
          the man checked the book and there was nothing between page 1 and 2. The electrician 
          said he saw the bill sticking out of the book and he moved it between page 2 and 3 
          to keep it safe. Who stole the money?`,
  hoursSlept: 7,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(28, 'days')
}))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')) 