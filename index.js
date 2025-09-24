const buttonsE1 =document.querySelectorAll("button");

const inputFieldE1 = document.getElementById("result")

for (let i =0; i <buttonsE1 .length; i++){
    buttonsE1[i].addEventListener("click",() =>{
        console.log(buttonsE1[i]. textContent);
        if(buttonValue === "C"){
            clearResult()
        } else if (buttonValue === "="){
            calculeteResult();

        } else {
            appendValue(buttonValue);
        }
    })
} 
function clearResult(){

}
function clculateResul(){}

function  appendValue(buttonValue){
   inputFieldE1.value += buttonValue; 
}
