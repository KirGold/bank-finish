let box = document.querySelector(".second")
window.addEventListener("scroll", function(){
    if(this.scrollY > 150){
        box.classList.add("new")
    }
})
let boxOne = document.querySelector(".thirt__block")
window.addEventListener("scroll", function(){
    if(this.scrollY > 800){
        boxOne.classList.add("new")
    }
})
let boxTwo = document.querySelector(".thirt__block-A")
window.addEventListener("scroll", function(){
    if(this.scrollY > 1200){
        boxTwo.classList.add("new")
    }
})
let boxThree = document.querySelector(".thirt__block-B")
window.addEventListener("scroll", function(){
    if(this.scrollY > 1500){
        boxThree.classList.add("new")
    }
})