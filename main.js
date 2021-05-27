// $(document).ready(function(){
//     $('.header-burger').click(function(event){
// $('header-burger,.ul').toggleClass('active')
//     })
// })
// let burger = document.getElementsByClassName('header-burger')
// let ul = document.getElementsByClassName('ul')
// function(addClass){
// }
// if(burger.click){function

// }
document.querySelector('.header-burger').onClick = () => {
    document.querySelector('.nav').classList.toggle('active');
    }