const entry = document.getElementById("input");
const radioCtoF = document.getElementById("celToF");
const radioFtoC = document.getElementById("fToCel");
const resultLabel = document.getElementById("result");
const buttonSubmit = document.getElementById("convertButton");

buttonSubmit.onclick = function(){
    let value = Number(entry.value)
    if(isNaN(value)){
        window.alert("NaN");
    }
    else if(radioCtoF.checked){
        resultLabel.textContent = (value*9/5 +32).toFixed(1)+ " °F";
    }
    else if(radioFtoC.checked){
        resultLabel.textContent = ((value-32)*5/9).toFixed(1)+" °C";
    }
    else{
        window.alert("Check a box!");
    }
}