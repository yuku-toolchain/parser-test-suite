var value = {};
var enumSym = Symbol('enum');
var nonEnumSym = Symbol('nonenum');
var symValue = Symbol('value');
var obj = {
  key: symValue
};
obj[enumSym] = value;
Object.defineProperty(obj, nonEnumSym, {
  enumerable: false,
  value: value
});
var result = Object.entries(obj);