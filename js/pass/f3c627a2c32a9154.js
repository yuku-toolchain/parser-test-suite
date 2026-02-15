let counter = 0;
Object.defineProperty(Array.prototype, "indices", {
  set() {
    counter++;
  }
});
let match = (/a/d).exec("a");