var bAddsC = {
  a: 'A',
  get b() {
    this.c = 'C';
    return 'B';
  }
};
var result = Object.values(bAddsC);