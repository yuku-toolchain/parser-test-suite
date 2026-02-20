function* values() {
  yield 1;
}
var CustomError = function () {};
var iterator = values();
var i = 0;
var error = new CustomError();