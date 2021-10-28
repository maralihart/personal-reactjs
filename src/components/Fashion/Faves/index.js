import { useState } from 'react'
import { Row } from "react-bootstrap";

import Favorite from './Favorite'

export default function Faves (props) {
  const [ favorites, setFavorites ] = useState
    ([{
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0427%2F0342%2F1592%2Fproducts%2Fimage.jpg%3Fv%3D1626373119&f=1&nofb=1", 
      alt: "image of a cat", 
      brand: "Joy Within", 
      product: "Islamic Planner", 
      description: "This planner is a Muslim student/worker need. Asides from its monthly and weekly planner, it features trackers for all five prayers, quran study, and more.", 
      link: "#",
      discount: ""
    },{
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.l0g9Sx_VFMPbZl92oMn-cgHaLG%26pid%3DApi&f=1", 
      alt: "image of a cat", 
      brand: "Zahraa The Label", 
      product: "Lila Neck Cover", 
      description: "I'm obsessed with Zahraa The Label's neck covers. They are of a fabric unlike any other and are full coverage. I never worry about my hijab with this cap!", 
      link: "#",
    },{
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0427%2F0342%2F1592%2Fproducts%2Fimage.jpg%3Fv%3D1626373119&f=1&nofb=1", 
      alt: "image of a cat", 
      brand: "Joy Within", 
      product: "Islamic Planner", 
      description: "This planner is a Muslim student/worker need. Asides from its monthly and weekly planner, it features trackers for all five prayers, quran study, and more.", 
      link: "#",
      discount: ""
    },{
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.l0g9Sx_VFMPbZl92oMn-cgHaLG%26pid%3DApi&f=1", 
      alt: "image of a cat", 
      brand: "Zahraa The Label", 
      product: "Lila Neck Cover", 
      description: "I'm obsessed with Zahraa The Label's neck covers. They are of a fabric unlike any other and are full coverage. I never worry about my hijab with this cap!", 
      link: "#",
    },
    ])
  return (
    <div id={props.id}>
      <h2 className="header" style={{ marginBottom: "20px" }}>Faves</h2>
      <Row>
      { favorites.map((item, index) => 
        <Favorite 
          item={item}
          key={index} 
          orientation={index % 2}/> ) }
      </Row>
    </div>
  )
}