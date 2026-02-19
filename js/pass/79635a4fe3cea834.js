var o = {};
function fn() {
  this.o = o;
}
var result = Reflect.construct(fn, []);