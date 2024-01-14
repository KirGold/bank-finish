let buttonSub = document.querySelector(".registration__button")



buttonSub.addEventListener('click', function(){
    let userName = document.querySelector(".registration__username")
    let email = document.querySelector(".registration__email")
    let password = document.querySelector(".registration__password")
    let telephone = document.querySelector(".registration__tel")

    let userNameValue = userName.value 
    let emailValue = email.value
    let passwordValue = password.value
    let telephoneValue = telephone.value


    if(userNameValue.length === 0 ){
        let modalFirst = document.querySelector(".modal")
        if(modalFirst.className === "modal"){
            modalFirst.classList.add("falseModal")
        }
        setTimeout(function(){
            modalFirst.classList.remove("falseModal")
        },2000)
        return
    }
    else if(emailValue.length === 0 || !emailValue.includes("@gmail.com")){
        let modalSecond = document.querySelector(".modal-2")
        if(modalSecond.className === "modal-2"){
            modalSecond.classList.add("falseModal")
        }
        
        setTimeout(function(){
            modalSecond.classList.remove("falseModal")
        },2000)
        return
    }
    else if(passwordValue.length === 0 || passwordValue.length < 7){
        let modalThirt = document.querySelector(".modal-3")
        if(modalThirt.className === "modal-3"){
            modalThirt.classList.add("falseModal")
        }
        
        setTimeout(function(){
            modalThirt.classList.remove("falseModal")
        },2000)
        return
    }
    else if(!telephoneValue.includes("+") || telephoneValue.length === 0 || !telephoneValue.length === 7 ){
        let modalFour = document.querySelector(".modal-4")
        if(modalFour.className === "modal-4"){
            modalFour.classList.add("falseModal")
        }
        setTimeout(function(){
            modalFour.classList.remove("falseModal")
        },2000)
        return
    }
    else{
        window.location.href = "./card.html"
    }
})







