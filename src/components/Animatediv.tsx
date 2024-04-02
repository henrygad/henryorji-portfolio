import "./styles.css"
import { CSSProperties,  useState, useEffect} from "react"
import { Global } from "../Globaltypes"

interface Props extends Global{
  animateFrom: string
}

const Animatediv = ({
  content, 
  flex,
  flex_direction,
  justify_Content,
  align_content, 
  animateFrom,
  animationTimeDalay,
  onScroll 
}: Props) => {

    const [isOn, setIsOn] = useState<boolean>(false)

    useEffect(()=>{
      if(!onScroll?.id){
        return;
      }
      
      window.addEventListener("scroll", ()=>{
        const el_id = document.getElementById(onScroll.id) as HTMLElement
        const rect = el_id.getBoundingClientRect()
      
        function onSectionView(){
          return(
            rect.top <= el_id.clientHeight / 2 &&
            rect.bottom >= el_id.clientHeight / 2
          )
        }

              setTimeout(() => {
                if(onScroll?.dispaly && onSectionView()){   
                  setIsOn(true)
                }else if(onScroll?.reverse && !onSectionView()){
                  setIsOn(false)
                }
            }, animationTimeDalay ); 
      
      
      })

    }, [onScroll?.id, onScroll?.dispaly, onScroll?.reverse, animationTimeDalay])



  const Style: CSSProperties = {
    display: 'flex',
    flex: flex,
    flexDirection: flex_direction? 'column': 'row',
    justifyContent: justify_Content,
    alignContent: align_content,
    opacity: isOn? '1': '0'
  }
  const StyleLeft: CSSProperties = { ...Style,  left: isOn? '0' : '-110%'}
  const StyleRight: CSSProperties = { ...Style, right: isOn? '0' : '-110%'}

  return <div  className="animation_div_container" style={animateFrom === 'right'? StyleRight: StyleLeft}>
      {content}
    </div>
}

export default Animatediv
