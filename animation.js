let texT = document.querySelector('.registration')
    window.addEventListener('load',function(){
        texT.classList.add('new')
    })



    let anim = document.querySelector('.load ')
    window.addEventListener('load',function(){
        anim.classList.add('new')
        this.setTimeout(function(){
            anim.classList.remove('new')

        },1000)
    })