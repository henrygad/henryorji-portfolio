

const navigateSmoothly = (id: string) => {
    const targer_el = document.getElementById(id) as HTMLElement
    const targetPositionY = targer_el.getBoundingClientRect().top
    const currentPostionY = window.pageYOffset
    const distance: number =  currentPostionY + targetPositionY

    window.scroll({top: distance, behavior: 'smooth'})
}

export default navigateSmoothly
