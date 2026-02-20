var o = {
  *m() {
    let x;
    eval('var x;');
  }
};
var iter = o.m();