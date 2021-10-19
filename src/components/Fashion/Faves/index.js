import { useState } from 'react'
import { Text } from '../../Essentials/Essentials'
import Favorite from './Favorite'

export default function Faves () {
  const [ favorites, setFavorites ] = useState([{img: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "image of a cat", brand: "Cat Place", product: "Kitten", description: "I really like this cat because it's cat", discount: "MARA"}])
  return (
    <>
      <Text h2 center>Faves</Text>
      { favorites.map((item, index) => 
        <Favorite 
          img={item.img} 
          alt={item.alt} 
          key={index} 
          brand={item.brand} 
          product={item.product} 
          description={item.description} 
          discount={item.discount} 
          orientation={index % 2}/> ) }
    </>
  )
}