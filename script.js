// Here we write function

let countEl = document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
let count = 0;

function increment(){
    count += 1
    let countEl = document.getElementById("count-el").innerText=count
    
}
// increment()

function save(){
    let countStr= count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count)
}