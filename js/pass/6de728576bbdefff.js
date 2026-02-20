var x = new Array("", "", "");
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== ",,") {}
}
var x = new Array("\\", "\\", "\\");
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "\\,\\,\\") {}
}
var x = new Array("&", "&", "&");
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "&,&,&") {}
}
var x = new Array(true, true, true);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "true,true,true") {}
}
var x = new Array(null, null, null);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== ",,") {}
}
var x = new Array(undefined, undefined, undefined);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== ",,") {}
}
var x = new Array(Infinity, Infinity, Infinity);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "Infinity,Infinity,Infinity") {}
}
var x = new Array(NaN, NaN, NaN);
if (x.toString() !== x.join()) {} else {
  if (x.toString() !== "NaN,NaN,NaN") {}
}