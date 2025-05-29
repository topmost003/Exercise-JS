let box = document.getElementById(`box`)
let add = document.getElementById(`add`)
let resetbtn = document.getElementById(`reset`)
let decrease = document.getElementById(`decrease`)

let count = 0;
// box.textContent = count

function plus(){
    count++;
   box.innerText = count;
}

function minus(){
    count--;
    box.innerText = count;

}

function reset(){
    count = 0;
  box.innerText = count;
} 
