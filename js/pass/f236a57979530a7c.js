var __obj = {
  valueOf: function () {},
  toString: void 0
};
var __matched = new String(__obj).match((function () {})());
var __expected = RegExp(undefined).exec("undefined");
if (__matched.length !== __expected.length) {}
if (__matched.index !== __expected.index) {}
if (__matched.input !== __expected.input) {}
for (var index = 0; index < __expected.length; index++) {
  if (__matched[index] !== __expected[index]) {}
}