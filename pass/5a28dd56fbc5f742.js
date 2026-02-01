var __obj = {
  valueOf: function () {},
  toString: void 0
};
var __lowerCase = new String(__obj).toLocaleUpperCase();
var __expected = "UNDEFINED";
if (__lowerCase.length !== __expected.length) {}
if (__lowerCase.index !== __expected.index) {}
if (__lowerCase.input !== __expected.input) {}
for (var index = 0; index < __expected.length; index++) {
  if (__lowerCase[index] !== __expected[index]) {}
}