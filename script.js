function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
 
function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;
    var result;
    result = eval(expression);
    display.value = result;
    
}
 
 function power() {
    let display = document.getElementById("display");
    var result = Math.pow(display.value, 2);
    display.value = result
}




