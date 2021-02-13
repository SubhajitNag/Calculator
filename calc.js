var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
var screenValue = '';


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'CE') {
            screenValue = screenValue.substr(0, -1)
            screen.value = screenValue
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
            console.log(screen.value)
        }

    })
}