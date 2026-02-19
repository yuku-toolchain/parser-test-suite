var array = new Array(1);
var arrayPrototypeGet0Calls = 0;
Object.defineProperty(Array.prototype, "0", {
  get() {
    Object.defineProperty(array, "length", {
      writable: false
    });
    arrayPrototypeGet0Calls++;
  }
});