

const getOnviewpiont = (id: string) => {
    const el_id = document.getElementById(id) as HTMLElement
    const rect = el_id.getBoundingClientRect()
      return(
        rect.top <= el_id.clientHeight / 2 &&
        rect.bottom >= el_id.clientHeight / 2
      )
    
}

export default getOnviewpiont
