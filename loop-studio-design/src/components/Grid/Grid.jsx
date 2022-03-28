import './Grid.css'

const Grid = ({gridData}) => {
    const {image, title} = gridData
  return (
    <>
      <div className='grid-item'>
        <img src={image} alt='' />
        <p>{title}</p>
      </div>
    </>
  )
}

export default Grid