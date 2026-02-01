function testArgs2(x, y, z) {
  var a = Object.keys(arguments);
  if (a.length === 2 && (a[0] in arguments) && (a[1] in arguments)) return true;
}
function testArgs3(x, y, z) {
  var a = Object.keys(arguments);
  if (a.length === 3 && (a[0] in arguments) && (a[1] in arguments) && (a[2] in arguments)) return true;
}
function testArgs4(x, y, z) {
  var a = Object.keys(arguments);
  if (a.length === 4 && (a[0] in arguments) && (a[1] in arguments) && (a[2] in arguments) && (a[3] in arguments)) return true;
}