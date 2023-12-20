import BagsAndFootwear from "./data/BagsAndFootwear"
import WomenWestern from "./data/WomenWestern"
import WomenEthnic from "./data/WomenEthnic"
import Men from "./data/Men"
import Kids from "./data/Kids"
import BeautyAndHealth from "./data/BeautyAndHealth"
import HomeAndKitchen from "./data/HomeAndKitchen"

import JewelleryAndAccessories from "./data/JewelleryAndAccessories"
import Electronic from "./data/Electronics"










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






