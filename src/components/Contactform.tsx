import "./styles.css"
import Button from "./Button"

const Contactform = () => {
  
  const handleForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
    
  return <form className="home_contact_form" onSubmit={e=>handleForm(e)} autoComplete="no">
    <div className="name_wrapper">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Zainab Nisa" id="name" autoComplete="no"/>
    </div>
    <div className="email_wraper">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="zainab123@gmail.com" id="email" autoComplete="no"/>
    </div>
    <div className="about_project_wrapper">
        <label htmlFor="message">Message</label>
        <textarea name="message" cols={30} rows={5} placeholder="I want to discuss with you about......." id="message" autoComplete="no" />
    </div>
    <div className="form_btn_wrapper">
        <Button text="Send here"/>
    </div>
  </form>
}

export default Contactform
