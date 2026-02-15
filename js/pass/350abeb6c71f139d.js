var dotAll = Object.getOwnPropertyDescriptor(RegExp.prototype, 'dotAll').get;
var other = $262.createRealm().global;
var otherRegExpProto = other.RegExp.prototype;
var otherRegExpGetter = Object.getOwnPropertyDescriptor(otherRegExpProto, 'dotAll').get;