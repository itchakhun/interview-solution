const input = document.querySelector('input');
const selectNumberType = document.getElementById('select-number-type');
const result = document.getElementById('result');


function onInput() {
  const number = parseFloat(value);
  const isValidNumber = numberType === '0' ? isPrime(number) : isFibonacci(number);
  result.textContent = isValidNumber;
}

function isPrime(number = 0) {
  for(var i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }
  return number > 1;
}

const isInteger = num => num % 1 === 0
const isPerfectSquare = num => isInteger(Math.sqrt(num))


function isFibonacci(val) {
  // (5*n2 + 4) or (5*n2 – 4) is a perfect square
  const initialVal = 5 * (val ** 2);
  return [initialVal + 4, initialVal - 4].some(isPerfectSquare);
}

let value = '';
input.addEventListener('input', ev => {
  const valueNumber = parseFloat(ev.target.value || 0);

  if (!isInteger(valueNumber)) {
    ev.target.value = Math.round(valueNumber).toString();
  }

  if (valueNumber < 0) {
    ev.target.value = "1"
  }

  value = ev.target.value;

  onInput()
});

let numberType = '0'; // 0 isPrime; 1 isFib
selectNumberType.addEventListener('input', ev => {
  numberType = ev.target.value
  onInput()
});

onInput();