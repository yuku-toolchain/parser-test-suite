var hasIndices = Object.getOwnPropertyDescriptor(RegExp.prototype, 'hasIndices').get;
var other = $262.createRealm().global;
var otherRegExpProto = other.RegExp.prototype;
var otherRegExpGetter = Object.getOwnPropertyDescriptor(otherRegExpProto, 'hasIndices').get;