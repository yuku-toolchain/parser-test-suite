var c1 = 0;
function myFunction1() {
  try {
    return 1;
  } finally {
    c1 = 1;
  }
  return 2;
}
var x1 = myFunction1();
if (x1 !== 1) {}
if (c1 !== 1) {}
var c2 = 0;
function myFunction2() {
  try {
    throw "exc";
    return 1;
  } finally {
    c2 = 1;
  }
  return 2;
}
try {
  var x2 = myFunction2();
} catch (e) {
  if (c2 !== 1) {}
}
var c3 = 0;
function myFunction3() {
  try {
    return someValue;
  } finally {
    c3 = 1;
  }
  return 2;
}
try {
  var x3 = myFunction3();
} catch (e) {
  if (c3 !== 1) {}
}
var c4 = 0;
function myFunction4() {
  try {
    return 1;
  } finally {
    c4 = 1;
    throw "exc";
    return 0;
  }
  return 2;
}
try {
  var x4 = myFunction4();
} catch (e) {
  if (c4 !== 1) {}
}
var c5 = 0;
function myFunction5() {
  try {
    return 1;
  } finally {
    c5 = 1;
    return someValue;
    return 0;
  }
  return 2;
}
try {
  var x5 = myFunction5();
} catch (e) {
  if (c5 !== 1) {}
}
var c6 = 0;
function myFunction6() {
  try {
    throw "ex1";
    return 1;
  } finally {
    c6 = 1;
    throw "ex2";
    return 2;
  }
  return 3;
}
try {
  var x6 = myFunction6();
} catch (e) {
  if (e === "ex1") {}
  if (e !== "ex2") {}
  if (c6 !== 1) {}
}
var c7 = 0;
function myFunction7() {
  try {
    return 1;
  } finally {
    c7 = 1;
    return 2;
  }
  return 3;
}
var x7 = myFunction7();
if (x7 !== 2) {}
if (c7 !== 1) {}
var c8 = 0;
function myFunction8() {
  try {
    throw "ex1";
  } finally {
    c8 = 1;
    return 2;
  }
  return 3;
}
try {
  var x8 = myFunction8();
} catch (ex1) {
  c8 = 10;
}
if (c8 !== 1) {}