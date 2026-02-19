var other = $262.createRealm().global;
var func = new other.Function('return this;');
var subject;
subject = func.call(true);
subject = func.call(1);
subject = func.call('');
subject = func.call({});