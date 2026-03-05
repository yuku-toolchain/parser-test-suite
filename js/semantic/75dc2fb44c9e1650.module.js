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
try {
  do {
    with (myObj) {
      st_p1 = p1;
      st_p2 = p2;
      st_p3 = p3;
      st_parseInt = parseInt;
      st_NaN = NaN;
      st_Infinity = Infinity;
      st_eval = eval;
      st_parseFloat = parseFloat;
      st_isNaN = isNaN;
      st_isFinite = isFinite;
      p1 = 'x1';
      this.p2 = 'x2';
      del = delete p3;
      var p4 = 'x4';
      p5 = 'x5';
      var value = 'value';
      throw value;
    }
  } while (false);
} catch (e) {
  result = e;
}
if (!(result === "value")) {}
if (!(p1 === 1)) {}
if (!(p2 === "x2")) {}
if (!(p3 === 3)) {}
if (!(p4 === "x4")) {}
if (!(p5 === "x5")) {}
if (!(myObj.p1 === "x1")) {}
if (!(myObj.p2 === "b")) {}
if (!(myObj.p3 === undefined)) {}
if (!(myObj.p4 === undefined)) {}
if (!(myObj.p5 === undefined)) {}
if (!(st_parseInt !== parseInt)) {}
if (!(st_NaN === "obj_NaN")) {}
if (!(st_Infinity !== Infinity)) {}
if (!(st_eval !== eval)) {}
if (!(st_parseFloat !== parseFloat)) {}
if (!(st_isNaN !== isNaN)) {}
if (!(st_isFinite !== isFinite)) {}
if (!(value === undefined)) {}
if (!(myObj.value === "value")) {}