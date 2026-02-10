const buttons = document.querySelectorAll(".rounded-button");
const display = document.getElementById("display");
const clear_button = document.getElementById("clear-button");
const equals_button = document.getElementById("equals-button");
let inputValue = display.value;


function addToDisplay(input){
    display.value += input;
}

function AC_clear() {
    display.value = '';
}

function DEL(){
    display.value = display.value.substring(0, display.value.length - 1);
}


clear_button.addEventListener('click', () => {
    AC_clear();
});


function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}  