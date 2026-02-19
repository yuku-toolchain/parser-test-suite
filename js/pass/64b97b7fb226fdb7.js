function SetThis() {
  this.THIS = this;
}
if (new SetThis().THIS.toString() !== "[object Object]") {}
function SetEvalThis() {
  this.THIS = eval("this");
}
if (new SetEvalThis().THIS.toString() !== "[object Object]") {}