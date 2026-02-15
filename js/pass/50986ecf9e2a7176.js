let newTarget = Object.defineProperty((function () {}).bind(), "prototype", {
  get() {}
});
let ab = new ArrayBuffer(0);
let byteOffset = 10;