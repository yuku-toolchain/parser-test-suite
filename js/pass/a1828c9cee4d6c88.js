var x = new Array(0, 1, 2, 3);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "0,1,2,3") {}
}
x = [];
x[0] = 0;
x[3] = 3;
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "0,,,3") {}
}
x = Array(undefined, 1, null, 3);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== ",1,,3") {}
}
x = [];
x[0] = 0;
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "0") {}
}