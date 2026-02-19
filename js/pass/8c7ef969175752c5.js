class NonArray {
  constructor() {
    Array.apply(this, arguments);
  }
}
var obj = new NonArray(1, 2, 3);
var result = Array.prototype.concat.call(obj, 4, 5, 6);