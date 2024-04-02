import "./styles.css"
import Button from "./Button"
import Animatediv from "./Animatediv"
import Animatetext from "./Animatetext"

interface Props {
    image: string,
    title: string,
    description: string,
    isLive: boolean,
    isMobileApp: boolean
    index: number
}

const Featuredprojects = ({image, title, description, isLive, isMobileApp, index}:Props) => {
  return <div className="featured_projects_box" key={index + 1} id={`${index}_featured_project`}>
            <Animatediv
                content={
                    <iframe className={isMobileApp?"image mobile" : "image desk_top" } src={image} title="desk top webiste" sandbox="allow-scripts" scrolling={isMobileApp? "no": 'yes'} />
                }
                animateFrom="left"
                flex={isMobileApp? "auto 0": "2 0 280px"}
                onScroll={{ id: `${index}_featured_project`, dispaly: true, reverse: true}}
            />
             <Animatediv
                content={
                    <div className="text">
                        <div className="product_index">{index + 1}</div>
                        <Animatetext content={
                            <h3>{title}</h3>
                        } 
                        onScroll={{ id: `${index}_featured_project`, dispaly: true,}}
                        animationTimeDalay={1000} 
                        />

                        <Animatetext content={
                            <p>{description}</p>
                        }
                        onScroll={{ id: `${index}_featured_project`, dispaly: true,}}
                        animationTimeDalay={1500} 
                        />

                        {isLive?(
                        <Button text="View live" background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>):''}
                    </div>
                }
                animateFrom="right"
                flex="1 0"
                onScroll={{ id: `${index}_featured_project`, dispaly: true, reverse: true}}
            />
        </div>
  
}

export default Featuredprojects