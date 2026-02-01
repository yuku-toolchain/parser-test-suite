var o1 = {};
Object.preventExtensions(o1);
var o2 = Object.create(null);
Object.preventExtensions(o2);
var proto = {};
var o3 = Object.create(proto);
Object.preventExtensions(o3);