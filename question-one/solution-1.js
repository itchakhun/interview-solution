const input = document.querySelector('input');
const selectNumberType = document.getElementById('select-number-type');
const result = document.getElementById('result');

let value = '';
input.addEventListener('input', ev => {
  value = ev.target.value;
  onInput()
});

let numberType = '0'; // 0 isPrime; 1 isFib
selectNumberType.addEventListener('input', ev => {
  numberType = ev.target.value
  onInput()
});

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

function isPerfectSquare(num) {
  return num > 0 && Math.sqrt(num) % 1 === 0;
}

function isFibonacci(val) {
  // (5*n2 + 4) or (5*n2 – 4) is a perfect square
  const initialVal = 5 * (val ** 2);
  return [initialVal + 4, initialVal - 4].some(isPerfectSquare);
}

onInput();