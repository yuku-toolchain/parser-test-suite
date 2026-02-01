var x = true;
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = new Boolean(true);
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = 1;
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = new Number(1);
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = "1";
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = new String(1);
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = undefined;
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = null;
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = {};
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = [1, 2];
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = function () {};
var object = {
  prop: x
};
if (object.prop !== x) {}
var x = this;
var object = {
  prop: x
};
if (object.prop !== x) {}