import "./App.css"
import Nav from "./components/Nav"
import Togglebackgroundcolor from "./components/Togglebackgroundcolor"
import Herocurosel from "./components/Herocurosel"
import Slidersettings from "./components/Slidersettings"
import Button from "./components/Button"
import henryprofilepic from "./assest/profilepic.png"
import logo from "./assest/henrylogo.svg"


const App = () => {

  const slidesContent:React.ReactElement[]  = [
    <div className="slide_content"><p>Figman</p></div>,
    <div className="slide_content"><p>HTML</p></div>,
    <div className="slide_content"><p>CSS</p></div>,
    <div className="slide_content"><p>JavaScript</p></div>,

    <div className="slide_content"><p>Reactjs</p></div>,
    <div className="slide_content"><p>React native</p></div>,
    <div className="slide_content"><p>Nodejs</p></div>,
    <div className="slide_content"><p>MongoDB</p></div>,
  ]

  const sliderId = "horocurosel-js"
  const slidemove_from = "left"
  const totalNumberOfcontents = 8
  const numberOfContent_per_vw = () => {
    let value: number = 2
    if(window.innerWidth >= 767.99){
      value = 4
    }

    return value
  }
  const autoPlay = {
    play: true,
    pause: true,
    onloadPlay: true,
    autoPlayDurition: 8000,
    autoPlayTransitionAnimation: "all 9.5s linear"
  }

    const onResizeNumberOfContent_per_vw = Slidersettings({sliderId, slidemove_from, totalNumberOfcontents, numberOfContent_per_vw, autoPlay}, (value)=>{})

    onResizeNumberOfContent_per_vw()
  

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
              <img className="image" src={henryprofilepic} alt="henry" />
              <h2> 
                <span className="greetings">Hi there !</span> <br />
                <span className="name">I'm Henry Orji</span>
              </h2>
                <h1 className="skill">Front-end Developer</h1>
                <p className="intro_text">I deseign and build clean and mobile friendly website and application</p>
                <Button text="Hire me" background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
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
            <Herocurosel slidesContent={slidesContent}  numberOfContent_per_vw={5} slidemove_from='left' sliderId={sliderId}/>
          </section>
        </div>
      </section>
    </main>
    <footer>
     
    </footer>
  </>
}

export default App
