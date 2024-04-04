import "./styles.css"
import Nav from './Nav'
import Togglebackgroundcolor from './Togglebackgroundcolor'
import { useEffect, useState } from "react"


const Header = () => {
    const [isOn, setIsOn] = useState<boolean>(false)
    const [onDisplay, setOnDisplay] = useState<boolean>(true)

    setTimeout(()=>{
        setIsOn(true)
    }, 1000)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const onSectionViewPort =  () => {
                const el_id = document.getElementById('contact_me') as HTMLElement
                const rect = el_id.getBoundingClientRect()
                  return(
                    rect.top <= el_id.clientHeight / 4
                  )
            }

        
            if(onSectionViewPort()){
               setOnDisplay(false)
            }else setOnDisplay(true)   
        })

    })


  return  <div className="header_container" style={
    {
        top: isOn? '0%' : '-10%',
        opacity: onDisplay?  '1': '0',

     }} >
  <div className="header_wrapper">
    <span className="header_logo_container">
    </span>
    <Nav />
    <div className="toggle_background_color_btn_container">
      <Togglebackgroundcolor />
    </div>
  </div>
</div>
}

export default Header
