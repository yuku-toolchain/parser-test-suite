function myFunction1() {
  try {
    return 1;
  } catch (err) {
    return 0;
  }
  return 2;
}
var x1 = myFunction1();
if (x1 !== 1) {}
function myFunction2() {
  try {
    throw "exc";
    return 1;
  } catch (err) {
    return 2;
  }
  return 3;
}
var x2 = myFunction2();
if (x2 !== 2) {}
function myFunction3() {
  try {
    return someValue;
  } catch (err) {
    return 1;
  }
  return 2;
}
var x3 = myFunction3();
if (x3 !== 1) {}
function myFunction4() {
  try {
    throw "ex1";
    return 1;
  } catch (err) {
    throw "ex2";
    return 0;
  }
  return 2;
}
try {
  var x4 = myFunction4();
} catch (e) {
  if (e === "ex1") {}
  if (e !== "ex2") {}
}