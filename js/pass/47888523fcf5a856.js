var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'ignoreCase').get;
var other = $262.createRealm().global;
var otherRegExpProto = other.RegExp.prototype;
var otherRegExpGetter = Object.getOwnPropertyDescriptor(otherRegExpProto, 'ignoreCase').get;