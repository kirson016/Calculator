var calculator ={



}


function getResult() {
  document.getElementById("input").value = eval(Calc.Input.value);

}
var elResult = document.getElementById('result');
elResult.onclick = getResult;

function resetInput() {
  document.getElementById("input").value = "0";
}
var input = document.getElementById('cleanInput');
input.onclick = resetInput;
