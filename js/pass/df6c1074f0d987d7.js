let i = 0;
var C = class {
  [i++] = i++;
  static [i++] = i++;
  [i++] = i++;
};
let c = new C();