import develop_process_img from "./assest/develop_process_img.svg"
import testimonial_profile_img from "./assest/testimonialprofileimage.png"
interface Global {
    image: string,
    title: string
    description: string
}
interface Data2 extends Global {
    animationDelay: number

}
interface Data3 extends Global {
    isLive: boolean,
    isMoblieApp: boolean,
}
interface Data4 {
    image: string
    name: string
    jobtitle: string
    testimonial: string
}

export const developmentprocessdata: Data2[] = [
    {
        image: develop_process_img,
        title: 'Product design research',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        animationDelay: 1000
    },
    {
        image: develop_process_img,
        title: 'Product uiux design',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        animationDelay: 1500
    },
    {
        image: develop_process_img,
        title: 'Product development',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        animationDelay: 2000
    }
]

export const featuresprojecttsdata: Data3[] = [
    {
        image:" https://arowoshegbesteel.com/",
        title: 'Traves',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: true,
        isMoblieApp: false
    },
    {
        image:"https://travelingwebsitehenry.netlify.app/",
        title: 'Ashalystylist',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: true,
        isMoblieApp: false
    },
    {
        image: "https://myoceanbox.netlify.app/",
        title: 'skiylooks',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: false,
        isMoblieApp: true
    },
] 

export const testimonialData: Data4[] = [
    {
        image: testimonial_profile_img,
        jobtitle: 'Product designer',
        name:  'Client Name',
        testimonial: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
    },
    {
        image: testimonial_profile_img,
        jobtitle: 'Product designer',
        name:  'Client Name',
        testimonial: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
    },
    {
        image: testimonial_profile_img,
        jobtitle: 'Product designer',
        name:  'Client Name',
        testimonial: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
    },
    {
        image: testimonial_profile_img,
        jobtitle: 'Product designer',
        name:  'Client Name',
        testimonial: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
    },
]
