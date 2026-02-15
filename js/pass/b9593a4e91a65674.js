var x = new Array();
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "") {}
}
x = [];
x[0] = 1;
x.length = 0;
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "") {}
}