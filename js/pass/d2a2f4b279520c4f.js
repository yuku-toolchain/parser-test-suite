var obj = {
  prop: 12
};
var preCheck = Object.isExtensible(obj);
Object.preventExtensions(obj);
delete obj.prop;