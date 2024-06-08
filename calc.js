// Getting all the keys from the calculator
const keys = document.querySelectorAll('.calculator-keys button');
const screen = document.querySelector('.calculator-screen');

keys.forEach(key => {
  key.addEventListener('click', function() {
    const keyValue = this.textContent;
    const screenValue = screen.value;
    if (keyValue === 'C') {
      screen.value = '';
    } else if (keyValue === '=') {
      try {
        screen.value = eval(screenValue);
      } catch {
        screen.value = 'Error';
      }
    } else {
      screen.value += keyValue;
    }
  });
});
