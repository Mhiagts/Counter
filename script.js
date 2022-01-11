let decreaseButton = document.getElementById("counter_decrease");
let increaseButton = document.getElementById("counter_increase");
let counter = document.getElementById("counter");
let count =0;

let resetButton = document.getElementById("button_reset");

decreaseButton.addEventListener("click", ()=>{
    count --;
    counter.innerHTML = count;
    counterStyle();
})

increaseButton.addEventListener('click', ()=>{
    count ++;
    counter.innerHTML = count;
    counterStyle();
})

function counterStyle(){
    if (count <0){
        
        counter.setAttribute("class","negative")
    }
    else if (count > 0){
       
        counter.setAttribute("class","positive")
    }
    else{
        counter.removeAttribute("class");
        counter.removeAttribute("class ");
    }
} 

resetButton.addEventListener('click', ()=>{
    count = 0;
    counter.innerHTML = count;
    counterStyle();
})