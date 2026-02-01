var __matched = String("undefined").match(undefined);
var __expected = RegExp(undefined).exec("undefined");
if (__matched.length !== __expected.length) {}
if (__matched.index !== __expected.index) {}
if (__matched.input !== __expected.input) {}
for (var index = 0; index < __expected.length; index++) {
  if (__matched[index] !== __expected[index]) {}
}