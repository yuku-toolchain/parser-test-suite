var array = [];
var arrayPrototypeSet0Calls = 0;
Object.defineProperty(Array.prototype, "0", {
  set(_val) {
    Object.freeze(array);
    arrayPrototypeSet0Calls++;
  }
});