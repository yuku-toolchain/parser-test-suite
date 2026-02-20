var arr = [[42, 1], [42, 2]];
var mapperFn = function (e) {
  return e;
};
var called = 0;
var ctorCalled = 0;
function ctor(len) {
  ctorCalled++;
}
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return ctor;
  }
};
var actual = arr.flatMap(mapperFn);