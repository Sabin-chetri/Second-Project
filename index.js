let burger=document.querySelector('.burger');
let items=document.querySelector('.items');
burger.addEventListener("click",()=>{
     items.classList.toggle("active");
})