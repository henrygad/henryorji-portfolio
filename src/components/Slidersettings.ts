import {Getcurrentslidesposition, Moveslides} from "../app/index"
import {Autoslidernav} from "../app/controls"

interface Props {
    sliderId: string,
    slidemove_from: string,
    totalNumberOfcontents: number,
    numberOfContent_per_vw: () => number,
    autoPlay?: {
        play: boolean,
        pause: boolean,
        onloadPlay: boolean,
        autoPlayDurition: number,
        autoPlayTransitionAnimation: string
    },
    arrowNav?: {},
    donsNav?: []
}

const Slidersettings = ({sliderId, slidemove_from, totalNumberOfcontents, numberOfContent_per_vw, autoPlay}: Props, func = (advanceFeature: {})=>{}) => {

    const handleSlider = (update: ()=> number) => {
        const slides_ele = document.getElementById(sliderId) as HTMLElement

        const hundrenViewWidth: number = 100
        const oneSlide: number = hundrenViewWidth
        const repeatFirstslide: number = 1 * oneSlide
        const numberOfContent_per_vw: number = update()
        const numberOfSlides: number = (totalNumberOfcontents / numberOfContent_per_vw)  * oneSlide
        const totalNumberOFSlidesWidht: number = numberOfSlides +  repeatFirstslide
        const evaluateWidthAndHeight = (value: string) => {     
            let newValue;
      
            if(value === 'left' || value === 'right') newValue = 'left'
            else if(value === 'top' || value === 'bottom')newValue = 'top';
      
            return newValue
         }

         
         slides_ele.style.width = evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'left'? totalNumberOFSlidesWidht+'%': '100%'
         slides_ele.style.height = evaluateWidthAndHeight(slidemove_from.toLocaleLowerCase()) === 'top'?  totalNumberOFSlidesWidht+'%': '100%'


         if(autoPlay?.play){
            const [Play, Pause] =  Autoslidernav([autoPlay?.onloadPlay, autoPlay?.autoPlayDurition], ()=>{
                const currentposition = Getcurrentslidesposition( 
                    [slides_ele, slidemove_from])
                    
                Moveslides([
                    currentposition,
                    slides_ele,
                    slidemove_from,
                    autoPlay?.autoPlayTransitionAnimation,
                    numberOfSlides, 
                    oneSlide,
                    numberOfContent_per_vw
                ], func)


                })

                Play()                      
                if(autoPlay?.pause){
                    slides_ele.addEventListener('mouseenter', event=> Pause())
                    slides_ele.addEventListener('mouseleave', event => Play())
                }

         }
        
    }
    window.addEventListener('load', ()=>{handleSlider(numberOfContent_per_vw)  })


    return (onResizeNumberOfContent_per_vw: () => number)=>{window.addEventListener('resize', ()=> handleSlider(onResizeNumberOfContent_per_vw)
    )}
}

export default Slidersettings