var get = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').get;
var proto = {};
var withCustomProto = Object.create(proto);
var withNullProto = Object.create(null);