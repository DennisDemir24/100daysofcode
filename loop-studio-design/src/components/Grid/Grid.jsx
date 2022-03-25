import './Grid.css'

import DeepEarth from '../../images/desktop/image-deep-earth.jpg'

const Grid = () => {
  return (
    <div className="container">
      <div className="title-wrapper">
        <h1>OUR CREATIONS</h1>
        <button>SEE ALL</button>
      </div>
      <div className="grid-container">
        <div className="grid-item">
            <img src={DeepEarth} alt="" />
            <p>DEEP EARTH</p>
        </div>
        <div className="grid-item">
            <img src={DeepEarth} alt="" />
            <p>DEEP EARTH</p>
        </div>
        <div className="grid-item">
            <img src={DeepEarth} alt="" />
            <p>DEEP EARTH</p>
        </div>
        <div className="grid-item">
            <img src={DeepEarth} alt="" />
            <p>DEEP EARTH</p>
        </div>
      </div>
    </div>
  )
}

export default Grid