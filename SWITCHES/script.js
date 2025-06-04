// // let score = prompt(`enter your score`)

// switch(true){
//  case score >= 80 :
//     alert (`A`)
//  break;

//  case score >= 70 : 
//  alert (`B`)
//  break;

//  case score >= 65 :  
//  alert (`C`)
//  break;
//  case score >= 55 :
//      alert (`D`)
//  break;
//  case score >= 40 : 
//  alert (`E`)
//  break;
//  case score < 40 : 
//  alert (`F`)
//  break;
//  default : 
//  alert(`enter a valid number`)
// break;

// }



function submit(){
let score = document.getElementById(`input`)
 score = score.value

switch(true){
 case score >= 80 :
    document.getElementById(`grade`).innerText = "A"
 break;

 case score >= 70 : 
  document.getElementById(`grade`).innerText = "B"
 break;

 case score >= 65 :  
  document.getElementById(`grade`).innerText = "C"
 break;
 case score >= 55 :
     document.getElementById(`grade`).innerText = "D"
 break;
 case score >= 40 : 
  document.getElementById(`grade`).innerText = "E"
 break;
 case score < 39 : 
  document.getElementById(`grade`).innerText = "F"
 break;
 default : 
 alert(`enter valid number`)
break;
}

}