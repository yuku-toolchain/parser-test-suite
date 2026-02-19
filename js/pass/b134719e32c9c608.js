var calls = 0;
var _context;
var target = new Proxy(function () {}, {
  apply: function (_target, context, args) {
    calls++;
    _context = context;
    return args[0] + args[1];
  }
});
var p = new Proxy(target, {});
var context = {};
var res = p.call(context, 1, 2);