import {useState, useEffect} from 'react'
import axios from 'axios'
import PatternDesktop from '../images/pattern-divider-desktop.svg'
import DiceIcon from '../images/icon-dice.svg'
import '../App.css'

const AdviceBox = () => {
    const [adviceData, setAdviceData] = useState(null)

    const fetchData = async () => {
      try {
          const res = await axios.get('https://api.adviceslip.com/advice')
          setAdviceData(res.data.slip)
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <>
      <div className='advice-box'>
        {adviceData && (
          <div className='inner-box'>
            <span>Advice #{adviceData.id}</span>
            <h1>"{adviceData.advice}"</h1>
            <img src={PatternDesktop} alt='' />
            <div>
              <button className='icon-wrapper' onClick={fetchData}>
                <img src={DiceIcon} className='dice-icon' alt='' />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AdviceBox