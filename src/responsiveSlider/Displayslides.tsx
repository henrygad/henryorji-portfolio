import { CSSProperties} from "react"


interface Props {
   slidesContent: React.ReactElement[]
   numberOfContent_per_vw: number
   slidemove_from: string
   sliderId: string
}
const newGroupOfArr: Array<React.ReactElement<string | React.JSXElementConstructor<string>>>[] = []

const Herocurosel = ({slidesContent,  numberOfContent_per_vw, slidemove_from, sliderId}: Props) => {
    
   const hundrenViewWidth: number = 100
   const oneSlide: number = hundrenViewWidth
   const repeatFirstslide: number = 1 * oneSlide
   const Createnewarrslides = () => {

      while (slidesContent.length > 0) {
          newGroupOfArr.push(slidesContent.splice(0, numberOfContent_per_vw))
      }
      return newGroupOfArr
   }
   const createNewArrslides = Createnewarrslides()
   const numberOfSlides: number = createNewArrslides.length  * oneSlide
   const totalNumberOFSlidesWidht: number = numberOfSlides +  repeatFirstslide
   const evaluateWidthAndHeight = (value: string) => {     
      let newValue;

      if(value === 'left' || value === 'right') newValue = 'left'
      else if(value === 'top' || value === 'bottom')newValue = 'top';

      return newValue
   }

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

      width: evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'left'? totalNumberOFSlidesWidht+'%': '100%', 
      height: evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'top'?  totalNumberOFSlidesWidht+'%': '100%'
   }  
   const slideStyle: CSSProperties = {
      width: '100%',
      height: '100%'
   }



  return <div className="slider" style={sliderStyle}>
  <div className="slides" id={sliderId} style={slidesStyle}>
     {createNewArrslides.map(slideContents => (
      slideContents.map((slideContent, index) =>  <div className="slide" key={index} style={slideStyle}>{slideContent}</div>)
     ))}
     { createNewArrslides[0].map((slideContent, index) => <div className="slide" key={index} style={slideStyle}>{slideContent}</div>)}
  </div>
</div>
}

export default Herocurosel
