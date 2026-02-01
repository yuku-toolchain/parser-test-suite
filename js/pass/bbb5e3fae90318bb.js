var unicode = Object.getOwnPropertyDescriptor(RegExp.prototype, 'unicode').get;
var other = $262.createRealm().global;
var otherRegExpProto = other.RegExp.prototype;
var otherRegExpGetter = Object.getOwnPropertyDescriptor(otherRegExpProto, 'unicode').get;