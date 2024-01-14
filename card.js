let cardName = document.querySelector(".card__name")
let inputName = document.querySelector(".form-name")
inputName.addEventListener("input", function(){
    let inputNameValue = inputName.value 
    cardName.innerHTML = inputNameValue
})


let cardSecondName = document.querySelector(".card__secondName")
let inputSecondName = document.querySelector(".form-secondName")
inputSecondName.addEventListener("input", function(){
    let inputSecondNameValue = inputSecondName.value
    cardSecondName.innerHTML = inputSecondNameValue
})


let cardNum = document.querySelector(".card__numbers")
let formNum = document.querySelector(".form__make")
formNum.addEventListener("click", function(event){
    event.preventDefault()
    let randomOne = Math.floor(Math.random()*9000)+1000
    let randomTwo = Math.floor(Math.random()*9000)+1000
    let randomThree = Math.floor(Math.random()*9000)+1000
    let randomFour = Math.floor(Math.random()*9000)+1000
    cardNum.innerHTML = `${randomOne} ${randomTwo} ${randomThree} ${randomFour}`
})




let cardCvv = document.querySelector(".card__cvv")
let formCvv = document.querySelector(".form__make-2")
formCvv.addEventListener("click", function(event){
    event.preventDefault()
    let randomCvv = Math.floor( Math.random()*900)+100
    cardCvv.innerHTML = `CVV - ${randomCvv}`
})

let cardDate = document.querySelector(".card__date")
let formDate = document.querySelector(".form__date")
formDate.addEventListener("change", function(){
    let inputDateValue = formDate.value
    let dateSelected = inputDateValue.split("-")
    if (dateSelected.length === 3 ){ 
        let year = dateSelected[0]
        let mounth = dateSelected[1]
        let day = dateSelected[2]
        let years = Number(year)+ 5
        cardDate.innerHTML = `${mounth}/${day}/${years}`
    }

})