import { useState } from 'react'

import Favorite from './Favorite'

export default function Faves (props) {
  const [ favorites, setFavorites ] = useState([{img: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "image of a cat", brand: "Cat Place", product: "Kitten", description: "I really like this cat because it's cat", discount: "MARA"}])
  return (
    <div id={props.id}>
      <h2 className="header">Faves</h2>
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
    </div>
  )
}