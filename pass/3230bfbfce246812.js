function ReturnThis() {
  return this;
}
if (ReturnThis() !== this) {}
function ReturnEvalThis() {
  return eval("this");
}
if (ReturnEvalThis() !== this) {}