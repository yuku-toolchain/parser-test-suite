var unicodeSets = Object.getOwnPropertyDescriptor(RegExp.prototype, 'unicodeSets').get;
var other = $262.createRealm().global;
var otherRegExpProto = other.RegExp.prototype;
var otherRegExpGetter = Object.getOwnPropertyDescriptor(otherRegExpProto, 'unicodeSets').get;