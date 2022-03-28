import './App.css'
import { Footer, Header, MainContent } from './components'

import DeepEarth from './images/desktop/image-deep-earth.jpg'
import NightArcade from './images/desktop/image-night-arcade.jpg'
import SoccerTeam from './images/desktop/image-soccer-team.jpg'
import TheGrid from './images/desktop/image-grid.jpg'
import FromAbove from './images/desktop/image-from-above.jpg'
import Pocket from './images/desktop/image-pocket-borealis.jpg'
import Curiosity from './images/desktop/image-curiosity.jpg'
import Fisheye from './images/desktop/image-fisheye.jpg'
import GridList from './components/Grid/GridList'

const gridData = [
  {
    image: DeepEarth,
    title: 'Deep Earth',
  },
  {
    image: NightArcade,
    title: 'Night Arcade',
  },
  {
    image: SoccerTeam,
    title: 'Soccer Team VR',
  },
  {
    image: TheGrid,
    title: 'The Grid',
  },
  {
    image: FromAbove,
    title: 'From Up Above VR',
  },
  {
    image: Pocket,
    title: 'Pocket Borealis',
  },
  {
    image: Curiosity,
    title: 'The Curiosity',
  },
  {
    image: Fisheye,
    title: 'Make It Fisheye',
  },
]

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <GridList />
      <Footer />
    </div>
  )
}

export default App
