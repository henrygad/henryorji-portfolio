import "./styles.css"
import Animatetext from "./Animatetext"

interface Props {
    image: string,
    title: string,
    description: string,
    animatioDelay: number
    index: number
}

const Developmentprocess = ({image, title, description, animatioDelay, index}: Props) => {
  return <div className="box"  key={index + 1}>
            <div className="box_index_number_wrapper"> <div className="number">{index + 1}</div></div>
            <div className="box_content">
              <img src={image} alt="" />
              <Animatetext 
                content={
                  <h3>Step <span className="title_index">{index + 1}</span>: {title}</h3>
                }
                justify_Content="flex-start"    
                animationTimeDalay={animatioDelay - 500}
                onScroll={{id: 'development_process_section', dispaly: true}}
                
              />
              <Animatetext 
                content={
                  <p>{description}</p>
                }
                justify_Content="flex-start"
                animationTimeDalay={animatioDelay}
                onScroll={{id: 'development_process_section', dispaly: true}}
                
              />
            </div>
    </div>
}

export default Developmentprocess
