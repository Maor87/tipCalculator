const billInput = document.querySelector('#bill');
const tipButtons = document.querySelectorAll('.p-buttons');
const tipPrice = document.querySelector('.pricing-num');
const totalPrice = document.querySelector('.pricing-num2');
const resetButton = document.querySelector('.reset-button');
const numPeopleInput = document.querySelector('.num-input');
const customButton = document.querySelector('.custom-percent');
const error = document.querySelector('.error');

// Event listeners
billInput.addEventListener('input', calculateTip);
tipButtons.forEach(button => button.addEventListener('click', calculateTip));
resetButton.addEventListener('click', reset);

// input persons
numPeopleInput.addEventListener('input', handleInput);


// Event listener for custom percentage
customButton.addEventListener('input', calculateTip);

function calculateTip() {
  // Get bill amount 
  const billAmount = parseFloat(billInput.value);
  
  let tipPercentage;

  // creating custom tip percentage
  if(this.classList.contains('custom-percent')){
    //get custom tip percentage
    tipPercentage = parseFloat(customButton.value) / 100;

  } else{
    tipPercentage = parseFloat(this.value);
  }

  // Calculate tip and total prices
  const tip = billAmount * tipPercentage;
  const total = billAmount + tip;

  // Get number of people
  const numPeople = parseInt(numPeopleInput.value);

  // Calculate tip and total per person
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = total / numPeople;

  // Update UI
  tipPrice.textContent = `${tipPerPerson.toFixed(2)}`;
  totalPrice.textContent = `${totalPerPerson.toFixed(2)}`;
}

function reset() {
  // Clear input values
  billInput.value = '';
  numPeopleInput.value = '';

  // Reset tip and total prices
  tipPrice.textContent = '0.00';
  totalPrice.textContent = '0.00';

  // Remove warning and red border
  numPeopleInput.style.border = '';
  numPeopleInput.removeAttribute('data-warning');
  error.textContent = '';
}




function handleInput() {
  let inputValue = numPeopleInput.value;

  if (inputValue === '') {
    // input is empty, do nothing
    return;
  }

  inputValue = parseInt(inputValue);

  if (isNaN(inputValue)) {
    // input is not a number, do nothing
    return;
  }

  if (inputValue === 0) {
    numPeopleInput.style.border = '2px solid red';
    error.textContent = numPeopleInput.getAttribute('data-warning');
    error.textContent = 'Can not be 0';
    
  } else {
    numPeopleInput.style.border = '';
    error.textContent = '';
    error.style.display = 'none';
  }
}
