let education = document.querySelector(".education")
let icon = document.querySelector(".education span img") as HTMLElement
let sec1 = document.querySelector(".sec1") as HTMLElement

let skills = document.querySelector(".skills")
let icon2 = document.querySelector(".skills span img") as HTMLElement
let sec2 = document.querySelector(".sec2") as HTMLElement

let workExperience = document.querySelector(".workExperience")
let sec3 = document.querySelector(".sec3") as HTMLElement
let icon3 = document.querySelector(".workExperience span img") as HTMLElement


icon.addEventListener("click",()=>{
    if(sec1.style.display === "none"){
        sec1.style.display = "block"
        icon.textContent = "Hide"
    }else {
        sec1.style.display = "none";
        icon.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon2.addEventListener("click",()=>{
    if(sec2.style.display === "none"){
        sec2.style.display = "block"
        icon2.textContent = "Hide"
    }else {
        sec2.style.display = "none";
        icon2.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon3.addEventListener("click",()=>{
    if(sec3.style.display === "none"){
        sec3.style.display = "block"
        icon3.textContent = "Hide"
    }else {
        sec3.style.display = "none";
        icon3.textContent = "Show"; // Change button text to 'Show'

    }
}
)

