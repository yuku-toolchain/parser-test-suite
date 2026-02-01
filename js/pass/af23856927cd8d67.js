function getGetterName(obj, name) {
  var getter = Object.getOwnPropertyDescriptor(obj, Symbol.species).get;
  return getter && getter.name;
}