var callCount = 0;
var Ctor = function () {
  callCount += 1;
};
var instance;
instance = Reflect.construct(Date, [64], Ctor);
Ctor.prototype = null;
instance = Reflect.construct(Date, [64], Ctor);