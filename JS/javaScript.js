
function getResult() {
  alert("elResult");
}
var elResult = document.getElementById('result');
elResult.onclick = getResult;

function resetInput() {
  document.getElementById("input").value = "0";;
}
var input = document.getElementById('cleanInput');
input.onclick = resetInput;
