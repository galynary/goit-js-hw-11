class Calculator {
  constructor(screenElement) {
    this.screenElement = screenElement;
    this.reset();
  }

  reset() {
    this.currentValue = '';
    this.previousValue = '';
    this.operator = null;
    this.updateScreen();
  }

  appendNumber(number) {
    if (number === '.' && this.currentValue.includes('.')) return;
    this.currentValue += number.toString();
    this.updateScreen();
  }

  chooseOperator(operator) {
    if (this.currentValue === '') return;
    if (this.previousValue !== '') {
      this.calculate();
    }
    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = '';
  }

  calculate() {
    let result;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentValue = result;
    this.operator = null;
    this.previousValue = '';
    this.updateScreen();
  }

  updateScreen() {
    this.screenElement.value = this.currentValue;
  }
}

const calculator = new Calculator(document.querySelector('#screen'));

document.querySelector('.calculator-keys').addEventListener('click', event => {
  const target = event.target;
  const value = target.value;
  if (!target.matches('button')) return;

  switch (target.classList[0]) {
    case 'operator':
      calculator.chooseOperator(value);
      break;
    case 'decimal':
      calculator.appendNumber(value);
      break;
    case 'all-clear':
      calculator.reset();
      break;
    case 'equal-sign':
      calculator.calculate();
      break;
    default:
      calculator.appendNumber(value);
  }
});
