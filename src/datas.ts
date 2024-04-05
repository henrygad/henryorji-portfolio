import develop_process_img from "./assest/develop_process_img.svg"
import testimonial_profile_img from "./assest/testimonialprofileimage.png"
import arowoshegbe_website from "./assest/arowoshegbe_website.png"
import traveling_website from "./assest/traveling_website.png"
import myoceanbox_website from "./assest/myocean_website.png"
import henry_webiste from "./assest/henry_website.png"
import hairsalon_website from "./assest/hairsalon_website.png"




interface Global {
    image: string,
    title: string
    description: string
}
interface Data2 extends Global {
    animationDelay: number

}
interface Data3 extends Global {
    isLive: boolean
    siteUlr: string
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
        image: arowoshegbe_website,
        title: 'Industrail installation webiste',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: true,
        siteUlr: 'https://arowoshegbesteel.com/'
    },
    {
        image: traveling_website,
        title: "Traveling webiste",
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: true,
        siteUlr: 'https://travelingwebsitehenry.netlify.app/'
    },
    {
        image: myoceanbox_website,
        title: 'Logistics company webiste',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: true,
        siteUlr: 'https://myoceanbox.netlify.app/'
    },
    {
        image: henry_webiste,
        title: 'Portfolio website',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: true,
        siteUlr: 'https://henryorjis.netlify.app/'
    },
    {
        image: hairsalon_website,
        title: 'Hair stylist website',
        description: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
        isLive: false,
        siteUlr: 'https://hairldeines.netlify.app/'
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
