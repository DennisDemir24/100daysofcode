import './MainContent.css'
import Image from '../../images/desktop/image-interactive.jpg'

const MainContent = () => {
  return (
    <div className="main-content">
        <div className="right">
            <img src={Image} alt="" />
        </div>
        <div className="left"></div>
    </div>
  )
}

export default MainContent