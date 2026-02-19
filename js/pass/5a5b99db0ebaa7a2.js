var x = 1;
if (x-- !== 1) {} else {
  if (x !== 1 - 1) {}
}
this.x = 1;
if (this.x-- !== 1) {} else {
  if (this.x !== 1 - 1) {}
}
var object = new Object();
object.prop = 1;
if (object.prop-- !== 1) {} else {
  if (this.x !== 1 - 1) {}
}