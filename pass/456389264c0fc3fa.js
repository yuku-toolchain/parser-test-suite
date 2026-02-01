var _target, _handler, _args, _P;
function Target() {}
var handler = {
  construct: function (t, args, newTarget) {
    _handler = this;
    _target = t;
    _args = args;
    _P = newTarget;
    return new t(args[0], args[1]);
  }
};
var P = new Proxy(Target, handler);
new P(1, 2);