import "./styles.css"
import { CSSProperties } from "react"

interface Props {
    text: string, 
    text_color?: string
    background_image?: string
}



const Button = ({text, text_color, background_image}:Props) => {

    const styles:CSSProperties = {
        color: text_color,
        backgroundImage: background_image? background_image: 'none',
    }



    return <button style={styles} className="button_component"> 
     {text}
    </button>
}


export default Button