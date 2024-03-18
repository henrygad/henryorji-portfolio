
export const Getcurrentslidesposition = ([slides_ele, slidemove_from])=>{
    let currentposition;

    if(slidemove_from.toLocaleLowerCase() === 'left'||
            slidemove_from.toLocaleLowerCase() === 'right') currentposition = slides_ele.style.left// get slides position left relative the scream view point    
    else if(slidemove_from.toLocaleLowerCase() === 'top'||
            slidemove_from.toLocaleLowerCase() === 'bottom' ) currentposition = slides_ele.style.top // get slides position top relative the scream view point

    return parseFloat(currentposition) * -1
}
 
export const Moveslides = ([
    currentposition,
    slides_ele,
    slidemove_from,
    animation_value,
    numberOfSlides, 
    perView,
    numberOfSlides_toDisplay_PerView
], Myfunc = (value)=>{})=>{
            
    let Nextposition;
    slides_ele.style.transition = animation_value


    const Usualslidesmove = ()=>{

        if(currentposition >= numberOfSlides){

            slides_ele.style.transition = "none"
            Nextposition = 0 //move slides to the start
              
            setTimeout(() => { //next move to the next slide from left '-100%'
                slides_ele.style.transition = animation_value
                Nextposition = 100
                GetslideOnviewInfor(Nextposition)

                if(slidemove_from.toLocaleLowerCase() === 'left') slides_ele.style.left = '-'+ Nextposition +'%'
                else if(slidemove_from.toLocaleLowerCase() === 'top') slides_ele.style.top = '-'+ Nextposition +'%'   
            }, 100);
    
        }else if(currentposition < 0){

            Nextposition = 0
        }else if(currentposition === 0){

            Nextposition =  perView
        }else{

            currentposition += perView
            Nextposition = currentposition
        }

        return Nextposition
    }

    const Oppositeslidesmove = ()=>{
        
        if(currentposition < 0){

            Nextposition = 0
        }else if(currentposition === 0){

            slides_ele.style.transition = 'none'
            Nextposition = numberOfSlides 

            setTimeout(() => {

                slides_ele.style.transition = animation_value
                Nextposition = numberOfSlides - perView
                GetslideOnviewInfor(Nextposition)
    
                if(slidemove_from.toLocaleLowerCase() === 'right') slides_ele.style.left = '-'+  Nextposition +'%'
                else if(slidemove_from.toLocaleLowerCase() === 'bottom') slides_ele.style.top = '-'+ Nextposition +'%'  
            }, 100)

        }else{

            currentposition -= perView
            Nextposition = currentposition 
        }
    
        return Nextposition
    }


    const getAllSlides = [...slides_ele.children]
    const Createnewarrslides = (array, groupSize) => {
        const newGroupOfArr = []

        while (array.length > 0) {
            newGroupOfArr.push(array.splice(0, groupSize))
        }

        return newGroupOfArr
    }
    const createNewArrslides = Createnewarrslides(getAllSlides, numberOfSlides_toDisplay_PerView)
    const GetslideOnviewInfor = (Nextposition)=>{
        let arrslides = []
        let slidesOnviewEle;
        let slidescurrentPositionIndex = (Nextposition) / 100
        if(slidescurrentPositionIndex === numberOfSlides / 100){
            slidescurrentPositionIndex = 0
        }

        createNewArrslides.forEach((value, index)=>{

            arrslides.push(value)
            if(Nextposition === index * 100){

                slidesOnviewEle = value
            }
        })


        Myfunc({
            arrslides,
            slidescurrentPositionIndex,
            numberOfSlides: numberOfSlides / 100,
            slidesOnviewEle,
            slideOnview_previousSibling: slidesOnviewEle[0].previousElementSibling,
            slideOnscream_NextSibling: slidesOnviewEle[0].nextElementSibling,
         })
    }

   
    if(slidemove_from.toLocaleLowerCase() === 'left') slides_ele.style.left = '-'+ Usualslidesmove() +'%'
    else if(slidemove_from.toLocaleLowerCase() === 'right')  slides_ele.style.left = '-'+ Oppositeslidesmove() +'%'
    else if(slidemove_from.toLocaleLowerCase() === 'top') slides_ele.style.top = '-'+ Usualslidesmove() +'%'
    else if(slidemove_from.toLocaleLowerCase() === 'bottom') slides_ele.style.top = '-'+ Oppositeslidesmove() +'%'

    
    GetslideOnviewInfor(Nextposition)
}