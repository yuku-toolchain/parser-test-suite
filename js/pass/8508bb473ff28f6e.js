var a = {
  get length() {
    return 0;
  },
  splice: Array.prototype.splice
};
try {
  a.splice(1, 2, 4);
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw e;
  }
}