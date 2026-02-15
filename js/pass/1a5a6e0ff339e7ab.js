let counter = 0;
Object.defineProperty(Array.prototype, "groups", {
  set() {
    counter++;
  }
});
let indices = (/(?<x>.)/d).exec("a").indices;
let {groups} = (/(?<__proto__>.)/d).exec("a").indices;