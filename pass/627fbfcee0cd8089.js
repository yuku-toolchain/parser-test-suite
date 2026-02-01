var o = {};
var internPrototype;
function fn() {
  this.o = o;
  internPrototype = Object.getPrototypeOf(this);
}
var result = Reflect.construct(fn, [], Array);