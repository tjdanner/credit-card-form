const veryDarkViolet = 'hsl(278, 68%, 11%)';
const lightGreyishViolet = 'hsl(270, 3%, 87%)';
const allInputs = document.querySelectorAll('input');
const errors = document.getElementsByClassName('error-message')
const nameInput = document.getElementById('name-input');
const cardName = document.getElementById('card-name');
const numberInput = document.getElementById('number-input');
const cardNumber = document.getElementById('card-number');
const dateInputMM = document.getElementById('date-input-MM');
const dateInputYY = document.getElementById('date-input-YY')
const cardDate = document.getElementById('card-date');
const cvcInput = document.getElementById('cvc-input');
const cardCvc = document.getElementById('card-cvc');
const confirmButton = document.getElementById('confirm');


confirmButton.addEventListener('mouseover', e => {
    confirmButton.style.color = veryDarkViolet;
    confirmButton.style.backgroundColor = lightGreyishViolet;
    confirmButton.addEventListener('mouseout', e => {
        confirmButton.style.color = '';
        confirmButton.style.backgroundColor = '';
    })
})

translateInputs = () => {
    cardName.innerHTML = nameInput.value;
    cardNumber.innerHTML = numberInput.value;
    cardDate.innerHTML = `${dateInputMM.value}/${dateInputYY.value}`
    cardCvc.innerHTML = cvcInput.value;
}

validateLetters = (userInput) => {
    const letters = /^[A-Za-z]+$/;
    if (userInput.value.match(letters)) {
        return true;
    } else {
        return false;
    }
}

confirmButton.addEventListener('click', e => {
    for (i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value === '' || allInputs[i].value == null) {
            allInputs[i].style.borderColor = 'red';
            errors[i].style.display = 'block';
            allInputs[i].addEventListener('keypress', e => {
                e.target.style.borderColor = '';
                if (allInputs[0].value) {
                    errors[0].style.display = '';
                } if (allInputs[1].value) {
                    errors[1].style.display = '';
                } if (allInputs[2].value && allInputs[3].value) {
                    errors[2].style.display = '';
                } if (allInputs[4].value) {
                    errors[4].style.display = '';
                }
            })
        }

        else {
            allInputs[i].style.borderColor = '';
            errors[i].style.display = '';
            cardName.innerHTML = nameInput.value;
            cardNumber.innerHTML = numberInput.value;
            cardDate.innerHTML = `${dateInputMM.value}/${dateInputYY.value}`
            cardCvc.innerHTML = cvcInput.value;
        }
    }
})



numberInput.addEventListener('keypress', e => {
    if (numberInput.value.length === 4 || numberInput.value.length === 9 || numberInput.value.length === 14) {
        numberInput.value = numberInput.value + ' ';
    }
});