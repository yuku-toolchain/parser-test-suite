var __obj = {
  toString: function () {}
};
var __matched = String(__obj).match(void 0);
var __expected = RegExp(void 0).exec("undefined");
if (__matched.length !== __expected.length) {}
if (__matched.index !== __expected.index) {}
if (__matched.input !== __expected.input) {}
for (var index = 0; index < __expected.length; index++) {
  if (__matched[index] !== __expected[index]) {}
}