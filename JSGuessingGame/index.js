const runButton = document.getElementById("okButton");
const input = document.getElementById("numInput");
const label = document.getElementById("numLabel");
const resultLabel= document.getElementById("resultLabel");
const resetButton = document.getElementById("resetButton");
let value=0;
let tries=0, wins=0;

runButton.onclick = function(){
    value=Math.floor((Math.random()*6)+1)
    label.textContent = value;
    tries++;
    let enteredValue = input.value;
    if(Number(enteredValue)===value)
    {
        wins++;
        resultLabel.textContent = `You win, number of wins: ${wins}, total tries: ${tries}`;
    }
    else
    {
        resultLabel.textContent = `Wrong guess, number of wins: ${wins}, total tries: ${tries}`;
    }
};

resetButton.onclick = function(){
    wins=0;
    tries=0;
    label.textContent = 0;
    resultLabel.textContent = "Game has been reset at 0 tries 0 wins. GLHF!"
};
