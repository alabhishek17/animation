const animi = document.querySelector('.animi');
const img1= document.querySelector('.img1');
const img2= document.querySelector('.img2');
const img3= document.querySelector('.img3');

animi.addEventListener('click' ,()=>{
    img1.classList.toggle("img1");
    img2.classList.toggle("img2");
    img3.classList.toggle("img3");
});