var realmA = $262.createRealm().global;
realmA.calls = 0;
var realmB = $262.createRealm().global;
var newTarget = new realmB.Function();
newTarget.prototype = null;
var fn = Reflect.construct(realmA.Function, ["calls += 1;"], newTarget);