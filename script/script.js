const btnPrev = document.querySelector('.btn__prev'),
btnNext = document.querySelector('.btn__next'),
slider = document.querySelector('.slider'),
sliderItem = document.querySelectorAll('.slider__item');

console.log(btnPrev,btnNext);

count = 0;

btnPrev.addEventListener('click',(e)=>{
    e.preventDefault();
    count--;
    if (count<0) {
        count = 0;
        return;
    }
    slider.prepend(sliderItem[count]);
    
});

btnNext.addEventListener('click',(e)=>{
    e.preventDefault();
    if (count == 12) count = 0;
    slider.append(sliderItem[count]);
    count++;
})

/*модалка*/

const lk = document.querySelector(".header__tel"),
modal = document.getElementById("modal"),
close = document.querySelector(".close");


lk.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.add("hide");


});

close.addEventListener("click",()=>{
    modal.classList.remove("hide");
})