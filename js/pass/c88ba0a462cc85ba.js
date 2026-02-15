var proto = {};
var subject = Object.create(proto);
Object.preventExtensions(subject);
subject.__proto__ = proto;