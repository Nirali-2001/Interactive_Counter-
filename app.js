let counterValue = 0;

function updateCounter() {
  document.getElementById('counter').innerText = counterValue;
}

function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  counterValue--;
  updateCounter();
}

function increaseBy(value) {
  counterValue += value;
  updateCounter();
}

function decreaseBy(value) {
  counterValue -= value;
  updateCounter();
}
