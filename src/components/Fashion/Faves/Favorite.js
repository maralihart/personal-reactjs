

export default function Favorite (props) {
  // orientation is whether the image is on the left or right
  return (
    <>
      <img src={props.img} height="100px" width="100px" alt={props.alt}/>
      <p bold>{props.brand}</p>
      <p bold>{props.product}</p>
      <p>{props.description}</p>
      {props.discount && <p>Use code {props.discount} to save $$</p>}
    </>
  )
}