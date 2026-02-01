var bDeletesC = {
  a: 'A',
  get b() {
    delete this.c;
    return 'B';
  },
  c: 'C'
};
var result = Object.values(bDeletesC);