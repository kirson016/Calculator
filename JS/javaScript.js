var calculator = {
  elResult: document.getElementById('resultButton'),
  clearButoon: document.getElementById('clearButton'),
  elInput: document.getElementById('resultWindow'),

  getResult: function() {
    document.getElementById("resultWindow").value = eval(Calc.Input.value);
  },

  resetInput: function() {
    document.getElementById("resultWindow").value = " ";
  },
};

calculator.elResult.onclick = calculator.getResult;
calculator.clearButoon.onclick = calculator.resetInput;
