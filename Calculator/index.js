let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let screenValue = '';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;

        if(buttonText == 'x'){
            buttonText = '*';

            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            // we use eval() to calculate
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        console.log(buttonText);
    });
}