var value = {};
var enumSym = Symbol('enum');
var nonEnumSym = Symbol('nonenum');
var symValue = Symbol('value');
var obj = {
  key: symValue
};
obj[enumSym] = value;
Object.defineProperty(obj, nonEnumSym, {
  writable: true,
  enumerable: false,
  configurable: true,
  value: value
});
var result = Object.getOwnPropertyDescriptors(obj);