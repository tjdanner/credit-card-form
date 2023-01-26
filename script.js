const nameInput = document.getElementById('name-input');
const cardName = document.getElementById('card-name');

const numberInput = document.getElementById('number-input');
const cardNumber = document.getElementById('card-number');

const dateInputMM = document.getElementById('date-input-MM');
const dateInputYY = document.getElementById('date-input-YY')
const cardDate = document.getElementById('card-date');

const cvcInput = document.getElementById('cvc-input');
const cardCvc = document.getElementById('card-cvc');

const confirmButton = document.getElementById('submit');


confirmButton.addEventListener('click', e => {
    cardName.innerHTML = nameInput.value;
    cardNumber.innerHTML = numberInput.value;
    cardDate.innerHTML = `${dateInputMM.value}/${dateInputYY.value}`
    cardCvc.innerHTML = cvcInput.value;
});

numberInput.addEventListener('keyup', e => {
    if (numberInput.value.length === 4 || numberInput.value.length === 9 || numberInput.value.length === 14) {
        numberInput.value = numberInput.value + ' ';
    }
});

