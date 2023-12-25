// import BagsAndFootwear from "./data/BagsAndFootwear.js"
import WomenWestern from "./data/WomenWestern.js"
import WomenEthnic from "./data/WomenEthnic.js"
import Men from "./data/Men.js"
import Kids from "./data/Kids.js"
import BeautyAndHealth from "./data/BeautyAndHealth.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAndAccessories from "./data/JewelleryAndAccessories.js"
import Electronics from "./data/Electronics.js"










let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")




inputSearchEl.addEventListener("keydown", () => {
    console.log(inputSearchEl.value)
    if (inputSearchEl.value) {

        document.getElementById("closesearch").style.display = "block"

    }
    else {

        document.getElementById("closesearch").style.display = "none"
    }
})


formInputEl.addEventListener("submit" , (e) =>{
    e.preventDefault()
    console.log( e, "hey there!")

    let listofRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value)
    console.log(e.value , "value")

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
            <div class="recentIcon">
                <img src="recent.jpeg">
             
             </div>
            <p>${recentInput[i]}</p>
          </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl

    }
})


/*** WomenWestern */
//   let WomenEthnic = document.getElementById("WomenEthnic")
  
  
 


// function  WomenEthnicfunc(){

//      return Array  (elemts) .WomenEthnic.map(el =>{
//         return`
//         <div>
//         <h4>${el.heading}</h4>
//         ${
//             el.data.forEach(element =>{
//                 return `
//                 <p>${element}</p>

//                 `
//             })
//         }
//         </div>
//         `
        

//     })
// }
//  WomenEthnic.innerHTML =  WomenEthnicfunc()

  


