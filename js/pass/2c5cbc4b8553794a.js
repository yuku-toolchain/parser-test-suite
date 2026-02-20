var proto = {
  _x: 0,
  set x(v) {
    return this._x = v;
  }
};
var object = {
  set x(v) {
    super.x = v;
  }
};
Object.setPrototypeOf(object, proto);