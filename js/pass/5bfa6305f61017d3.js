var newTarget;
function A() {
  newTarget = new.target;
}
var B = A.bind();
var C = B.bind();
var c = new C();