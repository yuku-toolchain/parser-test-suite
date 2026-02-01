let values = [0, {
  valueOf() {
    values.length = 0;
    return 100;
  }
}, 2];
let ta = Int32Array.from(values);