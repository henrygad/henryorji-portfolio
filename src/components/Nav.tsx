import "./styles.css"
import Button from "./Button"
import {useEffect, useRef} from "react"
import getOnviewpiont from "../Hooks/getOnviewport"
import navigateSmoothly from "../Hooks/navigateSmoothly"


interface Global {
  arrOfNavList?: string
  index?: number
}

interface Handlenavigationbutton extends Global {
  id: string
}

interface addColor extends Global {
}


const Nav = () => {
  const togglenavRef = useRef<HTMLDivElement>(null) 
  const responsivenavRef = useRef<HTMLDivElement>(null)


  const handleToggleNav = () =>{ 
    togglenavRef.current?.classList.toggle('toggle')
    responsivenavRef.current?.classList.toggle('open_responsive_nav')
    const isOpenresponsivenav = responsivenavRef.current?.className.includes('open_responsive_nav')

    if(responsivenavRef.current)
    if(isOpenresponsivenav){
      responsivenavRef.current.style.bottom = '0'
    }else responsivenavRef.current.style.bottom = '-100%'
    
  }

  const handleNavigationButton = ({id, arrOfNavList, index}: Handlenavigationbutton) => {
    navigateSmoothly(id)
    addColor({arrOfNavList: arrOfNavList, index: index }) 
  }

  const handleNavigationColorScrolling = () => {

    window.addEventListener('scroll', ()=>{
      let index:number
      const home =  getOnviewpiont('home')
      const about =  getOnviewpiont('about_me')
      const projects =  getOnviewpiont('projects')
      const contact =  getOnviewpiont('contact_me')
      
      if(home){
        index = 0
      }else if(projects){
        index = 1
      }else if(about){
        index = 2
      }else if(contact){
        index = 3
      }else{
        index = -1
      }
      
       addColor({arrOfNavList: 'header_nav_list_js', index: index})
       addColor({arrOfNavList: 'mobil_navigation_js', index: index})
      }
    )

  }
    
  function addColor ({arrOfNavList, index }: addColor){    
    const navLists = document.querySelectorAll<HTMLElement>('.'+arrOfNavList)

     navLists.forEach((navList, navListIndex) =>{

        navList.classList.remove('active_nav_list')

          if(navListIndex === index){
            navList.classList.add('active_nav_list')
          } 
    })

  }

  useEffect(()=>{
    handleNavigationColorScrolling()
  })
    

  return<nav className="header_main_menue">

    <div className="desk_top_nav">
      <div className="menue_list_container">
        <ul className="menue_lists_wrapper">
            <li className="header_nav_list_js  home"  onClick={()=>handleNavigationButton({id:'home', arrOfNavList:'header_nav_list_js', index: 0})}></li>
            <li className="header_nav_list_js  projects" onClick={()=>handleNavigationButton({id:'projects', arrOfNavList: 'header_nav_list_js', index: 1})}>Projects</li>
            <li className="header_nav_list_js  about" onClick={()=>handleNavigationButton({id:'about_me', arrOfNavList: 'header_nav_list_js', index: 2})}>About</li>
            <li className="header_nav_list_js  contact" onClick={()=>handleNavigationButton({id:'contact_me', arrOfNavList: 'header_nav_list_js', index: 3})}>Contact me</li>
        </ul> 
      </div>

      <div className="header_menue_bnt_wrapper">
        <div onClick={()=>handleNavigationButton({id:'contact_me'})}>
        <Button text="Hire me"  background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
        </div>
        <div>
        <Button text="Download resume"/>
        </div>
      </div>
    </div>


    <div className="toggle_btn_responsive_nav" ref={togglenavRef} onClick={handleToggleNav} >
      <div className="toggle_wrapper">
        <span className="short_hand left"></span>
        <span id="long_hand"></span>
        <span className="short_hand right"></span>
      </div>
    </div>

    <div className="responsive_nav" ref={responsivenavRef}>
      <div className="menue_list_container">
        <ul className="menue_lists_wrapper">
            <li className="mobil_navigation_js home" onClick={()=>handleNavigationButton({id:'home', arrOfNavList:'mobil_navigation_js', index: 0})} ></li>
            <li className="mobil_navigation_js about" onClick={()=>handleNavigationButton({id:'about_me', arrOfNavList:'mobil_navigation_js', index: 1})}>About</li>
            <li className="mobil_navigation_js projects" onClick={()=>handleNavigationButton({id:'projects', arrOfNavList:'mobil_navigation_js', index: 2})}>Projects</li>
            <li className="mobil_navigation_js contact" onClick={()=>handleNavigationButton({id:'contact_me', arrOfNavList:'mobil_navigation_js', index: 3})}>Contact me</li>
        </ul> 
      </div>

      <div className="header_menue_bnt_wrapper" >
        <div  onClick={()=>handleNavigationButton({id:'contact_me'})}>
        <Button text="Hire me"  background_image="linear-gradient(240deg, var(--secondary-color), var(--primary-color))"/>
        </div>
        <div>
         <Button text="Download resume" />
        </div>
      </div>
    </div>
  
</nav>
 
}

export default Nav
