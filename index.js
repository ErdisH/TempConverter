let value=0;
document.getElementById("minusButton").onclick = function(){
    if(value-1>=0) value--;
    document.getElementById("numberLabel").textContent = value; 
};
document.getElementById("addButton").onclick = function(){
    value++;
    document.getElementById("numberLabel").textContent = value; 
};
document.getElementById("resetButton").onclick = function(){
    value=0;
    document.getElementById("numberLabel").textContent = value; 
};
