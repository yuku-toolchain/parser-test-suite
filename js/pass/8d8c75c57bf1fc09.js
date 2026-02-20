var proto = {
  _x: 42,
  get x() {
    return 'proto' + this._x;
  }
};
var object = {
  get x() {
    return super.x;
  }
};
Object.setPrototypeOf(object, proto);