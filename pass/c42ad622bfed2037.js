var x = 1;
var y = x++;
if (y !== 1) {} else {
  if (x !== 1 + 1) {}
}
this.x = 1;
var y = this.x++;
if (y !== 1) {} else {
  if (this.x !== 1 + 1) {}
}
var object = new Object();
object.prop = 1;
var y = object.prop++;
if (y !== 1) {} else {
  if (this.x !== 1 + 1) {}
}