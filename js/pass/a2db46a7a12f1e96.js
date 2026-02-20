let counter = 0;
Object.defineProperty(Array.prototype, "groups", {
  set() {
    counter++;
  }
});
let match = (/(?<x>.)/).exec("a");
let {groups} = (/(?<__proto__>.)/).exec("a");