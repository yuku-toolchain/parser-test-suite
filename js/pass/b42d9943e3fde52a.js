var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'multiline').get;
var other = $262.createRealm().global;
var otherRegExpProto = other.RegExp.prototype;
var otherRegExpGetter = Object.getOwnPropertyDescriptor(otherRegExpProto, 'multiline').get;