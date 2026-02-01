this.p1 = 1;
this.p2 = 2;
this.p3 = 3;
var result = "result";
var myObj = {
  p1: 'a',
  p2: 'b',
  p3: 'c',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  },
  parseInt: function () {
    return 'obj_parseInt';
  },
  NaN: 'obj_NaN',
  Infinity: 'obj_Infinity',
  eval: function () {
    return 'obj_eval';
  },
  parseFloat: function () {
    return 'obj_parseFloat';
  },
  isNaN: function () {
    return 'obj_isNaN';
  },
  isFinite: function () {
    return 'obj_isFinite';
  }
};
var del;
var st_p1 = "p1";
var st_p2 = "p2";
var st_p3 = "p3";
var st_parseInt = "parseInt";
var st_NaN = "NaN";
var st_Infinity = "Infinity";
var st_eval = "eval";
var st_parseFloat = "parseFloat";
var st_isNaN = "isNaN";
var st_isFinite = "isFinite";
for (var prop in myObj) {
  with (myObj) {
    break;
    if (prop === 'p1') {
      st_p1 = p1;
      p1 = 'x1';
    }
    if (prop === 'p2') {
      st_p2 = p2;
      this.p2 = 'x2';
    }
    if (prop === 'p3') {
      st_p3 = p3;
      del = delete p3;
    }
    if (prop === 'parseInt') st_parseInt = parseInt;
    if (prop === 'NaN') st_NaN = NaN;
    if (prop === 'Infinity') st_Infinity = Infinity;
    if (prop === 'eval') st_eval = eval;
    if (prop === 'parseFloat') st_parseFloat = parseFloat;
    if (prop === 'isNaN') st_isNaN = isNaN;
    if (prop === 'isFinite') st_isFinite = isFinite;
    var p4 = 'x4';
    p5 = 'x5';
    var value = 'value';
  }
}
if (!(p1 === 1)) {}
if (!(p2 === 2)) {}
if (!(p3 === 3)) {}
if (!(p4 === undefined)) {}
try {
  p5;
} catch (e) {}
if (!(myObj.p1 === "a")) {}
if (!(myObj.p2 === "b")) {}
if (!(myObj.p3 === "c")) {}
if (!(myObj.p4 === undefined)) {}
if (!(myObj.p5 === undefined)) {}
if (!(st_parseInt === "parseInt")) {}
if (!(st_NaN === "NaN")) {}
if (!(st_Infinity === "Infinity")) {}
if (!(st_eval === "eval")) {}
if (!(st_parseFloat === "parseFloat")) {}
if (!(st_isNaN === "isNaN")) {}
if (!(st_isFinite === "isFinite")) {}
if (!(value === undefined)) {}
if (!(myObj.value === "myObj_value")) {}