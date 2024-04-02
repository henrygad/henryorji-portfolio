import "./styles.css"
import testimonial_icon from "../assest/testimonialicon.svg"
interface Props {
    image: string, 
    name: string,
    jobtitle: string,
    testimonial: string,
    index: number
}

const Testimonials = ({image, name, jobtitle, testimonial, index}: Props) => {
  return <div className="testimonial_box" key={index + 1}>
            <div className="first_div">
                <img src={image} alt="client profile" className="testimonial_profile_image" />
                <div className="profile_info">
                    <h4>{name}</h4>
                    <p className="job_title">{jobtitle}</p>
                </div>
                <img src={testimonial_icon} alt="testimonialicon"  className="testimonial_icon"/>
            </div> 
            <div className="second_div">
                <p>{testimonial}</p>
            </div>
    </div>
}

export default Testimonials
