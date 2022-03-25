import './MainContent.css'
import Image from '../../images/desktop/image-interactive.jpg'

const MainContent = () => {
  return (
    <div className='main-content'>
      <div className='right'>
        <img src={Image} alt='' />
      </div>
      <div className='left'>
        <div className='left-content'>
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            {' '}
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainContent