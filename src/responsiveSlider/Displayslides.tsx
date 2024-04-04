import { CSSProperties, useEffect, useRef} from "react"
import {Getcurrentslidesposition, Moveslides} from "./app/index"
import {Autoslidernav} from "./app/controls"

interface Props {
   slidesContent: React.ReactElement[]
   numberOfContent_per_vw: () => number,
   totalNumberOfcontents: number,
   slidemove_from: string
   sliderId: string
   autoPlay?: {
      play: boolean,
      pause: boolean,
      onloadPlay: boolean,
      autoPlayDurition: number,
      autoPlayTransitionAnimation: string
   },
   advancefeatures?: (value: {}) => void

}


const newGroupOfArr: Array<React.ReactElement<string | React.JSXElementConstructor<string>>>[] = []

const  Displayslides = ({
slidesContent,  
numberOfContent_per_vw,  totalNumberOfcontents,
slidemove_from, 
sliderId,  
autoPlay,
advancefeatures = (value: {}) => {}}: Props) => {
   const slidesElRef = useRef<HTMLDivElement>(null)


   const hundrenViewWidth: number = 100
   const oneSlide: number = hundrenViewWidth
   const repeatFirstslide: number = 1 * oneSlide
   const Createnewarrslides = (value: number) => {
      while (slidesContent.length > 0) {
          newGroupOfArr.push(slidesContent.splice(0, value))
      }
      return newGroupOfArr
   }
   const createNewArrslides = Createnewarrslides(numberOfContent_per_vw())
   let initialNumberOfSlides: number = createNewArrslides.length 
   const initialTotalNumberOFSlidesWidht: number = (initialNumberOfSlides * oneSlide) +  repeatFirstslide
   const evaluateWidthAndHeight = (value: string) => {     
      let newValue;

      if(value === 'left' || value === 'right') newValue = 'left'
      else if(value === 'top' || value === 'bottom')newValue = 'top';

      return newValue
   }
    

   const handleSlides = (updatedNumberOfContent_per_vw: number) => {

      const upadtedNumberOfSlides: number = (totalNumberOfcontents / updatedNumberOfContent_per_vw)  * oneSlide
      const updatedTotalNumberOFSlidesWidht: number = upadtedNumberOfSlides +  repeatFirstslide

      if(!slidesElRef.current) return;

      slidesElRef.current.style.width = evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'left'? updatedTotalNumberOFSlidesWidht +'%': '100%'
      slidesElRef.current.style.height = evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'top'?  updatedTotalNumberOFSlidesWidht +'%': '100%'


      if(autoPlay?.play){
         const [Play, Pause] =  Autoslidernav([autoPlay?.onloadPlay, autoPlay?.autoPlayDurition], ()=>{
             const currentposition = Getcurrentslidesposition( 
                 [ slidesElRef.current, slidemove_from])
                 
             Moveslides([
                 currentposition,
                 slidesElRef.current,
                 slidemove_from,
                 autoPlay?.autoPlayTransitionAnimation,
                 upadtedNumberOfSlides, 
                 oneSlide,
                 updatedNumberOfContent_per_vw
             ], advancefeatures)


             })

             Play()                      
             if(autoPlay?.pause){
                  slidesElRef.current.addEventListener('mouseenter', event=> Pause())
                  slidesElRef.current.addEventListener('mouseleave', event => Play())
             }

      }
            
   }


   useEffect(()=> { 
      handleSlides(3)
      setTimeout(()=>{handleSlides(1)}, 20000)

   })
  
   window.addEventListener("resize", ()=>{
      const updatedNumberOfSlides: number = numberOfContent_per_vw()
      
      if(updatedNumberOfSlides !== initialNumberOfSlides){
        // handleSlides(updatedNumberOfSlides)
         initialNumberOfSlides = updatedNumberOfSlides
      }
   })




   const sliderStyle: CSSProperties ={
      overflow: 'hidden',
      width: '100%',
      height: '100%',
   }
   const slidesStyle: CSSProperties = {
      display: 'flex',
      flexDirection: slidemove_from.toLocaleLowerCase() === 'top' || slidemove_from.toLocaleLowerCase() === 'bottom'? 'column': 'row', 
      position: 'relative', 
      top: '0%', 
      left: '0%',
      width: evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'left'? initialTotalNumberOFSlidesWidht+'%': '100%', 
      height: evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'top'?  initialTotalNumberOFSlidesWidht+'%': '100%'
   }  
   const slideStyle: CSSProperties = {
      width: '100%',
      height: '100%'
   }



  return <div style={sliderStyle}>
  <div ref={slidesElRef} id={sliderId} style={slidesStyle}>

     {createNewArrslides.map(slideContents => (
      slideContents.map((slideContent, index) =>  <div id={index + 'slide'} key={index + 1} style={slideStyle}>{slideContent}</div>)
     ))}



     { createNewArrslides[0].map((slideContent, index) => <div id={index + 'slide'} key={index + 1} style={slideStyle}>{slideContent}</div>)}
  </div>
</div>
}

export default Displayslides 
