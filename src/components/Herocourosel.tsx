import "./styles.css"
import Displayslides from "../responsiveSlider/Displayslides"
import Slidersettings from "../responsiveSlider/Slidersettings"
import herocouroslestar from "../assest/couroselstar.svg"

const Herocourosel = () => {

    const slidesContent  = [
      <div className="slide_content"><p>MongoDB</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>ExpressJS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>ReactJS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>NodeJS</p> <img src={herocouroslestar} alt="star" /></div>,

      <div className="slide_content"><p>Figma</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>HTML</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>CSS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>JavaScript</p> <img src={herocouroslestar} alt="star" /></div>,

      <div className="slide_content"><p>NextJS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>React Native</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>TailwindCSS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>MySQL</p> <img src={herocouroslestar} alt="star" /></div>,

      ]

      const sliderId = "horocurosel-js"
      const slidemove_from = "left"
      const totalNumberOfcontents = 12
      const numberOfContent_per_vw = () => {
        let value: number

        if(window.innerWidth <= 480){
          value = 1
        }else if(window.innerWidth >= 481 && window.innerWidth <= 767){
          value = 2
        } else value = 4
    
        return value     
      }
      const autoPlay = {
        play: true,
        pause: true,
        onloadPlay: true,
        autoPlayDurition: 10000,
        autoPlayTransitionAnimation: "left 10s linear"
      }
    
        const onResizeNumberOfContent_per_vw = Slidersettings({sliderId, slidemove_from, totalNumberOfcontents, numberOfContent_per_vw, autoPlay}, (value)=>{})
    
        onResizeNumberOfContent_per_vw()



  return <Displayslides slidesContent={slidesContent}  numberOfContent_per_vw={5} slidemove_from='left' sliderId={sliderId}/>
}

export default Herocourosel
