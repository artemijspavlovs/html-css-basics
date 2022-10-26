import './App.css'
import { ArtPrimary, ArtSecondary } from './components/ArtButtons'
import ArtCard from './components/ArtCard'
import KarinaButton from './components/KarinaButton'
import KarinaButtonText from './components/KarinaButtonText'


function App() {
  const cardBlock = {
    display: 'flex',
  }

  const Buttons = [
    'home',
    'about',
    'crew',
    'ship',
  ]

  const Users = [
    {
      name: 'Artemijs',
      position: 'Engineer',
      imageUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      name: 'Marija',
      position: '3D Artist',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      name: 'Karina',
      position: 'Biggest Talent',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    }
  ]

  Buttons.push('Karina')

  return (
    <div className="App">
      <KarinaButton />
      <ArtPrimary />
      <ArtSecondary />

      {
        Buttons.map((Button) => <KarinaButtonText key={Button} text={Button} />)
      }
      <div style={cardBlock}>
        {
          Users.map((Cow, i) => <ArtCard
            key={i}
            name={Cow.name}
            position={Cow.position}
            imageUrl={Cow.imageUrl}
          />
          )
        }
      </div>
    </div>
  )
}

export default App
