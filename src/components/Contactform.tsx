import "./styles.css"
import Button from "./Button"

const Contactform = () => {
    
  return <form className="home_contact_form" action="">
    <div className="name_wrapper">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Zainab Nisa" id="name"/>
    </div>
    <div className="email_wraper">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="zainab123@gmail.com" id="email" />
    </div>
    <div className="about_project_wrapper">
        <label htmlFor="message">Message</label>
        <textarea name="message" cols={30} rows={5} placeholder="I want to discuss with you about......." id="message"></textarea>
    </div>
    <div className="form_btn_wrapper">
        <Button text="Send here" />
    </div>
  </form>
}

export default Contactform
