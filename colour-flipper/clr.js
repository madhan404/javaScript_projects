let coloursName = ['red','green','  ','pink','yellow','orange','grey'];


let btn = document.querySelector('.btn');
let clr = document.querySelector('.clr');

btn.addEventListener('click',function(){
    let randNum = Math.floor(Math.random()*coloursName.length);
    document.body.style.backgroundColor = coloursName[randNum];
    clr.textContent=coloursName[randNum];
});