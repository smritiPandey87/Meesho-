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

    recentInput.push(inputSearchEl.value)
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






