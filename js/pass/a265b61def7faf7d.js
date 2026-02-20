var obj = {
  raw: {
    length: 2
  }
};
Object.defineProperty(obj.raw, '0', {
  get: function () {},
  configurable: true
});
delete obj.raw['0'];
obj.raw['0'] = 'a';
Object.defineProperty(obj.raw, '1', {
  get: function () {}
});