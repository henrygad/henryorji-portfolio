import "./styles.css"
import Displayslides from "../responsiveSlider/Displayslides"
import herocouroslestar from "../assest/couroselstar.svg"

const Herocourosel = () => {

      const slidesContent  = [
      <div className="slide_content 1"><p>ReactJS</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content 2"><p>React Native</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content 3"><p>NodeJS</p> <img src={herocouroslestar} alt="star" /></div>,

      <div className="slide_content 4"><p>Figma</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content 5"><p>HTML</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content 6"><p>CSS</p> <img src={herocouroslestar} alt="star" /></div>,

      <div className="slide_content 7"><p>JavaScript</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content 8"><p>Git</p> <img src={herocouroslestar} alt="star" /></div>,
      <div className="slide_content 9"><p>GitHub</p> <img src={herocouroslestar} alt="star" /></div>,
      ]

      const sliderId = "horocurosel-js"
      const slidemove_from = "left"
      const totalNumberOfcontents = 9
      const numberOfContent_per_vw = () => {
        let value: number

        if(window.innerWidth >= 0 && window.innerWidth <= 480){
             value = 1
        }else value = 3
    
        return value     
      }
      const autoPlay = {
        play: true,
        pause: true,
        onloadPlay: true,
        autoPlayDurition: 10000,
        autoPlayTransitionAnimation: "left 10s linear"
      }
    


  return <Displayslides  slidesContent={slidesContent}
                          numberOfContent_per_vw={numberOfContent_per_vw}
                          totalNumberOfcontents={totalNumberOfcontents}
                          slidemove_from={slidemove_from}
                          sliderId={sliderId}
                          autoPlay={autoPlay}
                          advancefeatures={(value)=>{}} />
}

export default Herocourosel
