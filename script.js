let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")

inputSearchEl.addEventListener("keydown",()=>{
    // console.log(inputSearchEl)
    if(inputSearchEl){
       document.getElementById("closeSearch").style.display = "block"    
    }
    else{

        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("sumbit",(e)=>{
    e.preventDefault()

     recentInput.push( inputSearchEl.value)
    console.log(recentInput)
})