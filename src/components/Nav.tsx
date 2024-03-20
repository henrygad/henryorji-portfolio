import "./styles.css"
import Button from "./Button"
import homeicon from "../assest/homeicon.svg"
import { useRef} from "react"

const Nav = () => {
  const togglenavRef = useRef<HTMLDivElement>(null) 
  const responsivenavRef = useRef<HTMLDivElement>(null)

  const handleToggleNav = () =>{ 
    togglenavRef.current?.classList.toggle('toggle')
    responsivenavRef.current?.classList.toggle('open_responsive_nav')
    const isOpenresponsivenav = responsivenavRef.current?.className.includes('open_responsive_nav')

    if(responsivenavRef.current)
    if(isOpenresponsivenav){
      responsivenavRef.current.style.bottom = '0'
    }else responsivenavRef.current.style.bottom = '-90%'
    
  }

 
    

  return<nav className="header_main_menue">

    <div className="desk_top_nav">
      <div className="menue_list_container">
        <ul className="menue_lists_wrapper">
            <li className="home"><img src={homeicon} alt="home nav" /></li>
            <li className="about">About</li>
            <li className="projects">Projects</li>
            <li className="contact">Contact me</li>
        </ul> 
      </div>

      <div className="header_menue_bnt_wrapper">
        <Button text="Hire me"  background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
        <Button text="Download resume" />
      </div>
    </div>


    <div className="toggle_btn_responsive_nav" ref={togglenavRef} onClick={handleToggleNav} >
      <div className="toggle_wrapper">
        <span className="short_hand left"></span>
        <span id="long_hand"></span>
        <span className="short_hand right"></span>
      </div>
    </div>

    <div className="responsive_nav" ref={responsivenavRef}>
      <div className="menue_list_container">
        <ul className="menue_lists_wrapper">
            <li className="home"><img src={homeicon} alt="home nav" /></li>
            <li className="about">About</li>
            <li className="projects">Projects</li>
            <li className="contact">Contact me</li>
        </ul> 
      </div>

      <div className="header_menue_bnt_wrapper">
        <Button text="Hire me"  background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
        <Button text="Download resume" />
      </div>
    </div>
  
</nav>
 
}

export default Nav
