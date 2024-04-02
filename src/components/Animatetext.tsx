import "./styles.css"
import { useEffect, useRef, useState } from "react"
import { CSSProperties} from "react"
import { Global } from "../Globaltypes"


const Animatetext = ( {content, 
  flex_direction,
  justify_Content,
  align_content,
  animationTimeDalay,
 onScroll } : Global) => {

    const [isOn, setIsOn] = useState<boolean>(false)
    const [minHeight, setMinHeight] = useState<number>(0)
    const parentEle = useRef<HTMLDivElement>(null)

    useEffect(()=>{
      const parentDivMinHeight =  Number(parentEle.current?.firstElementChild?.clientHeight)
      setMinHeight(parentDivMinHeight)

      if(!onScroll?.id){
        return;
      }
      
      window.addEventListener("scroll", ()=>{
        const el_id = document.getElementById(onScroll.id) as HTMLElement
        const rect = el_id.getBoundingClientRect()
       
        function onSection(){
          return(
            rect.top <= el_id.clientHeight / 2 &&
            rect.bottom >= el_id.clientHeight / 2
          )
        }

         if(onScroll?.dispaly && onSection() === true){
              setTimeout(() => {
                setIsOn(true)
            }, animationTimeDalay ); 
          }    
      
      })

    }, [onScroll?.id, onScroll?.dispaly, animationTimeDalay])

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
