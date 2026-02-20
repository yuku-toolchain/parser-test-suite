var _target, _args, _handler, _context;
var target = function () {};
var handler = {
  apply: function (t, c, args) {
    _handler = this;
    _target = t;
    _context = c;
    _args = args;
  }
};
var p = new Proxy(target, handler);
var context = {};
p.call(context, 1, 2);