var calculator = {

  elResult: document.getElementById('resultButton'),
  clearButoon: document.getElementById('clearButton'),
  elInput: document.getElementById('resultWindow'),

  getResult: function(elInput) {
    calculator.elInput.value = eval(Calc.Input.value);

  },

  resetInput: function() {
    calculator.elInput.value = " ";
  },
};

calculator.elResult.onclick = calculator.getResult;
calculator.clearButoon.onclick = calculator.resetInput;
