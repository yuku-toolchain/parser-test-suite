var calls = 0;
var _NewTarget;
var Target = new Proxy(function () {}, {
  construct: function (_Target, args, NewTarget) {
    calls += 1;
    _NewTarget = NewTarget;
    return {
      sum: args[0] + args[1]
    };
  }
});
var P = new Proxy(Target, {
  construct: undefined
});
var NewTarget = function () {};
var obj = Reflect.construct(P, [3, 4], NewTarget);