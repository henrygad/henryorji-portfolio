import "./styles.css"
import Displayslides from "../responsiveSlider/Displayslides"
import Slidersettings from "../responsiveSlider/Slidersettings"
import herocouroslestar from "../assest/couroselstar.svg"

const Herocourosel = () => {

    const slidesContent  = [
      <div className="slide_content"><p>ReactJS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>React Native</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>NodeJS</p> <img src={herocouroslestar} alt="star" /></div>,

      <div className="slide_content"><p>Figma</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>HTML</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>CSS</p> <img src={herocouroslestar} alt="star" /></div>,

      <div className="slide_content"><p>JavaScript</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>Git</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content"><p>GitHub</p> <img src={herocouroslestar} alt="star" /></div>,
      ]

      const sliderId = "horocurosel-js"
      const slidemove_from = "left"
      const totalNumberOfcontents = 9
      const numberOfContent_per_vw = () => {
        let value: number

        if(window.innerWidth <= 480){
          value = 1
        } else value = 3
    
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



  return <Displayslides slidesContent={slidesContent}  numberOfContent_per_vw={numberOfContent_per_vw()} slidemove_from={slidemove_from} sliderId={sliderId}/>
}

export default Herocourosel
