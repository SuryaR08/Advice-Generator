const pointer = document.querySelector(".pointer")
const p = document.querySelector(".p")
const id = document.querySelector(".id")

const url = "https://api.adviceslip.com/advice"

pointer.addEventListener("click",async function(){
    const data = await fetch(url)
    var newData = await data.json()
    p.innerHTML = newData.slip.advice;
    id.innerHTML = newData.slip.id;
})

