import React, {useContext} from 'react'
import GifsContext from '../context/GifsContext'
import Gif from '../components/Gif'


const Detail = ({params}) => {
  const {gifs} = useContext(GifsContext)
  console.log(gifs)

  const {title, url, id} = gifs.find(gif => gif.id === params.id)
  
  return (
    <Gif title={title} url={url} id={id} />
  )
}

export default Detail