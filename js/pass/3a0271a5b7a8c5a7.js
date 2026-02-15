var obj = {};
Object.defineProperty(obj, 'prop', {
  value: 'abc',
  configurable: true
});
delete obj.prop;