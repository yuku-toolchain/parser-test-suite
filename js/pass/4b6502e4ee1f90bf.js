let count = 0;
function fn(...args) {
  count++;
  return args;
}
let f_unction = new Function();
Object.defineProperty(f_unction, "length", {
  get() {
    return 1;
  }
});
let object = new Object();
Object.defineProperty(object, "length", {
  get() {
    return 1;
  }
});
let number = new Number();
Object.defineProperty(number, "length", {
  get() {
    return 1;
  }
});
let boolean = new Boolean();
Object.defineProperty(boolean, "length", {
  get() {
    return 1;
  }
});