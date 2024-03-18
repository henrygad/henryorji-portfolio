import "./styles.css"
import Button from "./Button"
import homeicon from "../assest/homeicon.svg"

const Nav = () => {
    

  return<nav className="header_main_menue">

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
</nav>
 
}

export default Nav
