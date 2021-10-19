import { Text } from '../../Essentials/Essentials'

export default function Favorite (props) {
  // orientation is whether the image is on the left or right
  return (
    <>
      <img src={props.img} height="100px" width="100px" alt={props.alt}/>
      <Text p bold>{props.brand}</Text>
      <Text p bold>{props.product}</Text>
      <Text p>{props.description}</Text>
      {props.discount && <Text p>Use code {props.discount} to save $$</Text>}
    </>
  )
}