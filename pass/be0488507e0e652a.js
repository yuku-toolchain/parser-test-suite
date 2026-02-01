var __obj = {
  valueOf: function () {},
  toString: void 0
};
var __upperCase = new String(__obj).toUpperCase();
var __expected = "UNDEFINED";
if (__upperCase.length !== __expected.length) {}
if (__upperCase.index !== __expected.index) {}
if (__upperCase.input !== __expected.input) {}
for (var index = 0; index < __expected.length; index++) {
  if (__upperCase[index] !== __expected[index]) {}
}