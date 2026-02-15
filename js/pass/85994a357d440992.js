var ArrayTarget = new Proxy(Array, {});
var ArrayProxy = new Proxy(ArrayTarget, {});
var array = new ArrayProxy(1, 2, 3);
class MyArray extends Array {
  get isMyArray() {
    return true;
  }
}
var myArray = Reflect.construct(ArrayProxy, [], MyArray);