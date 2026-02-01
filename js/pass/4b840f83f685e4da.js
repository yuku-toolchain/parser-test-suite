function Target() {}
function NewTarget() {}
var handler = {
  construct: function (target, args, newTarget) {
    var a = args[0];
    var b = args[1];
    return {
      sum: a + b
    };
  }
};
var P = new Proxy(Target, handler);
var res = Reflect.construct(P, [1, 2], NewTarget);