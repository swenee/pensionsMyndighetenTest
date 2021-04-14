

beforePageLoad();

let startCounter = 10;

function beforePageLoad(){


}

function afterPageLoad(){
  console.log("afterPageLoad");
  document.getElementById("countText").innertext = startCounter;
}


function showMessage(){
  console.log("hiddenMessage()");
  document.getElementById("hiddenMessage").style.display = 'block';
}


function decreaseCountdown(){
  console.log("decreaseCountdown()");
  if(startCounter > 0){
    startCounter--;
  }
  document.querySelector("div > p").innerHTML = startCounter;

}


function decreaseCountdown2(){
  console.log("decreaseCountdown2");

  let countButton2 = document.querySelector("#countButton2");
  let currentValue = countButton2.innerHTML;
  if(currentValue > 0){
    let newValue = --currentValue;
  }
  countButton2.innerHTML = newValue;
}
