var realm1 = $262.createRealm().global;
var realm2 = $262.createRealm().global;
var realm3 = $262.createRealm().global;
var newTarget = new realm1.Function();
newTarget.prototype = "str";
var boundNewTarget = realm2.Function.prototype.bind.call(newTarget);
var date = Reflect.construct(realm3.Date, [], boundNewTarget);