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
    <div className="slide_content"><p>one</p></div>,
    <div className="slide_content"><p>two</p></div>,
    <div className="slide_content"><p>three</p></div>,
    <div className="slide_content"><p>four</p></div>,
    <div className="slide_content"><p>five</p></div>,
    <div className="slide_content"><p>six</p></div>,
  ]

  const sliderId = "horocurosel-js"
  const slidemove_from = "left"
  const totalNumberOfcontents = 6
  const handleNumberOfContent_per_vw = ()=>{
    if(window.innerWidth >= 480.99 && window.innerWidth <= 767){
      return 2
    } else if(window.innerWidth <= 480){
      return 1
    }else return 3

  }
  const numberOfContent_per_vw = () => {
   return handleNumberOfContent_per_vw()
  }
  const autoPlay = {
    play: true,
    pause: true,
    onloadPlay: false,
    autoPlayDurition: 5000,
    autoPlayTransitionAnimation: "all 6s ease"
  }

    const [onResizeNumberOfContent_per_vw] = Slidersettings({sliderId, slidemove_from, totalNumberOfcontents, numberOfContent_per_vw, autoPlay}, (value)=>{})

    onResizeNumberOfContent_per_vw(()=> {
      return handleNumberOfContent_per_vw()
    })
  

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
