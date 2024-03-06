import React from 'react'
import Gif from '../components/Gif'
import useGlobalGifs from '../hooks/useGlobalGifs'


const Detail = ({params}) => {
  const gifs = useGlobalGifs()
  console.log(gifs)

  const {title, url, id} = gifs.find(gif => gif.id === params.id)
  
  return (
    <Gif title={title} url={url} id={id} />
  )
}

export default Detail