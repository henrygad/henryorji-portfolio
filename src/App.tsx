import "./App.css"
import Nav from "./components/Nav"
import Togglebackgroundcolor from "./components/Togglebackgroundcolor"
import Herocourosel from "./components/Herocourosel"
import Button from "./components/Button"

import logo from "./assest/henrylogo.svg"


const App = () => {
  

  return<>
    <header>
      <div className="header_container  header_container_10vh">
        <div className="header_wrapper">
          <span className="header_logo_container">
            <img className="logo" src={logo} alt="henry logo" />
            <p className="logo_text">enry</p>
          </span>
          <Nav />
          <div className="toggle_background_color_btn_container"><Togglebackgroundcolor  /></div>
        </div>
      </div>
    </header>
    <main>
      <section className="home_hero_section">
          <div className="home_hero_grid_design">
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box add_star one "></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box bigger_box ">
              <div className="content">
                <h2> 
                  <span className="greetings">Hi there !</span> <br />
                  <span className="name">I'm Henry Orji</span>
                </h2>
                <div className="txt">
                  <h1 className="skill">Mern Full-Stack Developer</h1>
                  <p className="intro_text">I deseign and build clean and mobile friendly website and application</p>
                </div>
                <Button text="Hire me" background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
              </div>
            </div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box "></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box add_star two"></div>
            <div className="grid_box "></div>
            <div className="grid_box "></div>
            <div className="grid_box "></div>
            <div className="grid_box is_display "></div>
        </div>
      </section>
      <section className="home_curosel_slider_section">
        <div className="home_curosel_slider_wrapper">
          <section className="content">
            <Herocourosel />
          </section>
        </div>
      </section>
    </main>
    <footer>
     
    </footer>
  </>
}

export default App
