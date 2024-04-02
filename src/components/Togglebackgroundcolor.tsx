import "./styles.css"
import { useState, CSSProperties } from "react"


const Togglebackgroundcolor = () => {
    const [left, setLeft] = useState<boolean>(true)
    
    const buttonStyle: CSSProperties = {
        backgroundColor: left? "#fff": "var(--regular-color)" 
    }
    const spanStyle:CSSProperties = {
        left: left? "2px": "20px",
        backgroundImage: left? "linear-gradient(240deg, var(--regular-color) 100%, var(--secondary-color) )" : "linear-gradient(240deg, var(--primary-color), var(--secondary-color))",
    }

    const handleToggle = () => {
        const bodyEle = document.querySelector('body') as HTMLBodyElement
      
        if(left){
            setLeft(false)
            bodyEle.classList.add("toggle_body_background_color")
            bodyEle.classList.add("toggle_color")
        }else{
            setLeft(true)
            bodyEle.classList.remove("toggle_body_background_color")
            bodyEle.classList.remove("toggle_color")

        }
        
    }


  return <button type="button" className="toggle_btn" style={buttonStyle}>
    <span className="toggle" style={spanStyle} onClick={handleToggle}></span>
  </button>
}


export default Togglebackgroundcolor
