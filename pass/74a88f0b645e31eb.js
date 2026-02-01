var array = new Array(1);
var arrayPrototypeGet0Calls = 0;
Object.defineProperty(Array.prototype, "0", {
  get() {
    Object.freeze(array);
    arrayPrototypeGet0Calls++;
  }
});