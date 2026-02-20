var string = 'abc';
var first = 'a';
var second = 'b';
var third = 'c';
var iterationCount = 0;
for (var value of string) {
  first = second;
  second = third;
  third = null;
  iterationCount += 1;
}