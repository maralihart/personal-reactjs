export function Card(props) {
  return (
    <div style={{ 
      background: props.background, 
      width: props.width, 
      height: props.height,
      justifyContent: 'center',
      padding: '10px 15px',
      lineheight: '6px',
      }}>
      {props.children}
    </div>
  )
}

export function Left(props) {
  return (
    <div style={{ width: "75%" }}>
      {props.children}
    </div>
  )
}

export const TikTok = "https://tiktok.com/@maradrinksmilk"
export const Instagram = "https://instagram.com/mi.lk"
export const Email = "mailto:pr@mara.fyi"
export const primary = "#7A4C2C"
export const secondary = "#718F94"
export const tertiary = "#F4F4F8"