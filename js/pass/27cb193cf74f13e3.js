var obj;
var proto = {};
var ownProp = {};
obj = {
  __proto__: proto,
  ['__proto__']: {},
  ['__proto__']: ownProp
};