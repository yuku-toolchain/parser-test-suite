var stopped = 0;
var obj = {
  length: 3
};
Object.defineProperty(obj, "1", {
  get: function () {}
});
Object.defineProperty(obj, "2", {
  get: function () {
    stopped++;
  }
});