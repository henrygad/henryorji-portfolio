import "./styles.css"
import { useEffect, useRef, useState } from "react"
import { CSSProperties} from "react"
import { Global } from "../Globaltypes"
import getOnviewpiont from "../Hooks/getOnviewport"


const Animatetext = ( {content, 
  flex_direction,
  justify_Content,
  align_content,
  animationTimeDalay,
 onScroll } : Global) => {

    const [isOn, setIsOn] = useState<boolean>(false)
    const [minHeight, setMinHeight] = useState<number>(20)
    const parentEle = useRef<HTMLDivElement>(null)


    useEffect(()=>{
      handleResizeDivHeight() 
      window.addEventListener('resize', () => {
        handleResizeDivHeight()
      })



      if(!onScroll?.id){
        return;
      }
      
      window.addEventListener("scroll", ()=>{
        const onSectionViewPort = getOnviewpiont(onScroll?.id)

         if(onScroll?.dispaly && onSectionViewPort){
              setTimeout(() => {
                setIsOn(true)
            }, animationTimeDalay ); 
          }    
      })

    }, [onScroll?.id, onScroll?.dispaly, animationTimeDalay ])

    function handleResizeDivHeight() {
      const parentDivMinHeight =  Number(parentEle.current?.firstElementChild?.clientHeight)
      setMinHeight(parentDivMinHeight)
    }





     


    const Style: CSSProperties = {
      display: 'flex',
      flexDirection: flex_direction? 'column': 'row',
      justifyContent: justify_Content,
      alignContent: align_content,
      minHeight: minHeight + "px"
    }


    if(!onScroll?.dispaly){
      setTimeout(() => {
        setIsOn(true)
     }, animationTimeDalay );
    }

  return <div ref={parentEle} className={`text_animation_container  ${isOn === true ? "animate_text": "set_text"}`} style={Style}>
    {content}
  </div>
}

export default Animatetext
