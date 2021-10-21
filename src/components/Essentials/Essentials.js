export function Card(props) {
  return (
    <div style={{ 
      background: props.background, 
      width: props.width, 
      height: props.height,
      justifyContent: 'center',
      padding: props.noPadding ? 0 : '10px 15px',
      lineheight: '6px',
      display: 'block'
      }}>
      {props.children}
    </div>
  )
}

export function Left(props) {
  return (
    <div style={{ width: "80%" }}>
      {props.children}
    </div>
  )
}

export function LinkButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div style={{ 
        background: primary, 
        width: "100%", 
        height: "50px",
        marginTop: "10px",
        justifyContent: 'center',
        alignItems: 'center',
        }}>
          {/* TODO: Fix padding */}
        <p className="text-center white">{props.children}</p>
      </div>
    </a>
  )
}

export const TikTok = "https://tiktok.com/@maradrinksmilk"
export const Instagram = "https://instagram.com/mi.lk"
export const Email = "mailto:pr@mara.fyi"
export const primary = "#7A4C2C"
export const secondary = "#718F94"
export const tertiary = "#F4F4F8"