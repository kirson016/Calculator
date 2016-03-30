var calculator = {

  elResult: document.getElementById('resultButton'),
  clearButoon: document.getElementById('clearButton'),
  elInput: document.getElementById('resultWindow'),

  getResult: function() {
    calculator.elInput.value = eval(Calc.Input.value);
  },

  resetInput: function() {
    calculator.elInput.value = " ";
  },

  enterFunction: function(event) {
      if (event.keyCode == 13 || event.keyCode== 61) {
        let result = eval(Calc.Input.value);
      calculator.elInput.value = result;
      }
  },
};

calculator.elResult.onclick = calculator.getResult;
calculator.clearButoon.onclick = calculator.resetInput;
calculator.elInput.onkeydown = calculator.enterFunction ;
