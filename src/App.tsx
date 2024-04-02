import "./App.css"
import Nav from "./components/Nav"
import Togglebackgroundcolor from "./components/Togglebackgroundcolor"
import Herocourosel from "./components/Herocourosel"
import Button from "./components/Button"
import { developmentprocessdata, featuresprojecttsdata, testimonialData} from "./datas"
import Developmentprocess from "./components/Developmentprocess"
import Featuredprojects from "./components/Featuredprojects"
import henryprofile_image from "./assest/henryprofileimage.png"
import Testimonials from "./components/Testimonials"
import Contactform from "./components/Contactform"
import Googlemap from "./components/Googlemap"
import Animatetext from "./components/Animatetext"
import Animatediv from "./components/Animatediv"


const App = () => {
  

  return<>
    <header className="header_nav_fixed_position">
      <div className="header_container  header_container_10vh">
        <div className="header_wrapper">
          <span className="header_logo_container">
          </span>
          <Nav />
          <div className="toggle_background_color_btn_container">
            <Togglebackgroundcolor  />
          </div>
        </div>
      </div>
    </header>
    <main className="header_nav_fixed_position_margin_top">
      <section className="home_hero_section hero_container_90vh"id="home_Section">

        <section className="home_hero_grid_design">
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box add_star one "></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box bigger_box ">
              <div className="content">
                <div className="first_intro_text">
                  <Animatetext content={
                     <h2> 
                     <span className="greetings">Hi there !</span> <br />
                     <span className="name">I am Henry</span>
                   </h2>
                  } 
                  justify_Content="flex-start"
                  animationTimeDalay={2000}
                  />

                </div>
                <div className="second_into_text">
                  <Animatetext content={<h1>Front-end Developer.</h1>} 
                  justify_Content="center"
                   animationTimeDalay={2500}/>

                   <Animatetext  content={
                    <p > I'm currently from Lagos. I'm a driven and dedicated <br />
                    software developer with passion for designing and developing clean <br /> and mobile  friendly web applications.</p>
                   } 
                   justify_Content="center"
                   animationTimeDalay={3000} />
                </div>
                <div className="hero_btn">
                      <Button text="Hire me" background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
                  </div>
              </div>
            </div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box remove_right_border is_display"></div>
            <div className="grid_box remove_left_border is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box is_display"></div>
            <div className="grid_box "></div>
            <div className="grid_box"></div>
            <div className="grid_box"></div>
            <div className="grid_box remove_bottom_border"></div>
            <div className="grid_box remove_bottom_border add_star two"></div>
            <div className="grid_box remove_bottom_border"></div>
            <div className="grid_box remove_bottom_border"></div>
            <div className="grid_box remove_bottom_border"></div>
            <div className="grid_box is_display remove_bottom_border"></div>
        </section>

        <section className="home_curosel_slider_section">
           <Herocourosel />
        </section>
    
      </section>
      <section className="my_design_and_development_process container_2clm" id="development_process_section">
        <div className="title"><h2>My process to develop</h2> <div className="star_icon"></div></div>
        <div className="wrapper">
          {developmentprocessdata.map((values, index)=>(
            <Developmentprocess image={values.image} title={values.title} description={values.description} animatioDelay={values.animationDelay} index={index} />
          ))} 
        </div>
      </section>
      <section className="featured_projects container_2clm">
      <div className="title"><h2>My featured projects</h2> <div className="star_icon"></div></div>
      <div className="wrapper">
        {featuresprojecttsdata.map((values, index)=>(
          <Featuredprojects image={values.image} title={values.title} description={values.description} isLive={values.isLive} isMobileApp={values.isMoblieApp} index={index} />
        ))}
      </div>
      </section>
      <section className="about_me container_2clm" id="about_me">
        <div className="title"><h2>About me</h2> <div className="star_icon"></div></div>
        <div className="about_content_wrapper flex_box_2d">
          <div className="image">
            <img src={henryprofile_image} alt="henry loveday profile" />
          </div>
          <div className="text">
            <Animatetext content={
              <h3 className="name">Hello, I'm Henry Loveday</h3>
            }
            justify_Content="center"
            onScroll={{id:'about_me', dispaly: true}}/>

            <Animatetext content={
              <p>let me tell you a little about myslef. well, first permit me to take you into the dept of front-end development. i live in lagos nigeria and i am looking for a job</p>
            } animationTimeDalay={500}
            justify_Content="center"
            onScroll={{id:'about_me', dispaly: true}}/>
            <div className="experience_data">
              <div className="years">
                <p className="number">02+</p>
                <p className="text">Years <br/> Experience</p>
              </div>
              <div className="completed_projects">
                <p className="number">10+</p>
                <p className="text">Projects <br /> Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial container_2clm">
        <div className="title"><h2>My client testimonials</h2> <div className="star_icon"></div></div>
        <div className="wrapper  grid_box_2clm">
          {testimonialData.map((values, index)=>(
            <Testimonials image={values.image} name={values.name} jobtitle={values.jobtitle} testimonial={values.testimonial} index={index} />
          ))}
        </div>
      </section>
      <section className="call-to_action container_2clm" id="call_to_action">
        <div className="title"><h2>What next ?</h2> <div className="star_icon"></div></div>
        <div className="wrapper">
          <div className="text">
            <Animatetext content={
                  <h3>Let's start devloping your project</h3>
                }
                onScroll={{id:'call_to_action', dispaly: true}}/>

            <Animatetext content={
                  <p>Want to see how to transform your brand into a unique style. sent us a message</p>
                }
                animationTimeDalay={500}
                onScroll={{id:'call_to_action', dispaly: true}}/> 
          </div>
          <Button  text="Message me" />
        </div>
      </section>
      <section className="contact_me" id="contact_me">
        <div className=" wrapper flex_box_2d">
          <div className="form_container">
            <Animatediv content={ <Contactform />} 
            flex="1 0"
            animateFrom="left"
            onScroll={{id: 'contact_me', dispaly: true, reverse: true}}
            />
          </div>
          <div className="map_container">
          <Animatediv content={  <Googlemap />} 
            flex="1 0"
            animateFrom="right"
            onScroll={{id: 'contact_me', dispaly: true, reverse: true}}
            />
          </div>
        </div>
      </section>
    </main>
    <footer>
      <section className="footer_container  container_2clm">
          <div className="wrapper flex_box_2d">
            <span className="footer_logo_container">
            </span>
            <div className="footer_nav flex_box_2d">
              <div className="footer_nav_wrapper">
                <ul className="footer_nav_list">
                  <li>Twitter</li>
                  <li>Github</li>
                  <li>Linkedin</li>
                  <li>Instagram</li>
                </ul>
              </div>
              <div className="footer_bnt_wrapper">
                <Button text="Hire me"  background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
                <Button text="Download resume" />
              </div>
            </div>
          </div>
          <div className="copy_right">
            <p>henry copy right 2024</p>
          </div>
        </section>
    </footer>
  </>
}

export default App
