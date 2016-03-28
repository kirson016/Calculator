var calculator = {
  elResult: document.getElementById('result'),
  input: document.getElementById('cleanInput'),

  getResult: function() {
    document.getElementById("input").value = eval(Calc.Input.value);
  },

  resetInput: function() {
    document.getElementById("input").value = " ";
  },
};

calculator.elResult.onclick = calculator.getResult,
calculator.input.onclick = calculator.resetInput
