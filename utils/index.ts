export const scrollTop =() =>{
  window.scrollTo({top: 0, behavior: 'smooth'})
}

export const rnd = (m:number,n:number)=>(Math.floor( Math.random() * (n - m + 1) ) + m)