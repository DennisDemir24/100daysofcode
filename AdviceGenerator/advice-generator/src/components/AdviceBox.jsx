import {useState, useEffect} from 'react'
import axios from 'axios'

const AdviceBox = () => {
    const [adviceData, setAdviceData] = useState(null)

    const fetchData = async () => {
      const res = await axios.get('https://api.adviceslip.com/advice')
      setAdviceData(res.data.slip)
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <>
      <div className='advice-box'>
        {adviceData && (
                <div>
                    <h1>{adviceData.advice}</h1>
                </div>
        )}
      </div>
    </>
  )
}

export default AdviceBox