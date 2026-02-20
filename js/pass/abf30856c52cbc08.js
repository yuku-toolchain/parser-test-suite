var empty = Object.create(null);
var C, value;
for (C = class {
  get [('x' in empty)]() {
    return 'via get';
  }
}; ; ) {
  value = C.prototype.false;
  break;
}
for (C = class {
  set [('x' in empty)](param) {
    value = param;
  }
}; ; ) {
  C.prototype.false = 'via set';
  break;
}