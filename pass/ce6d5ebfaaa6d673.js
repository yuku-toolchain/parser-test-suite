var bDeletesC = {
  a: 'A',
  get b() {
    Object.defineProperty(this, 'c', {
      enumerable: false
    });
    return 'B';
  },
  c: 'C'
};
var result = Object.values(bDeletesC);