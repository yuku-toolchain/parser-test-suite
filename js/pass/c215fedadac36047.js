for (let i = 0; i < 5; ++i) {
  Object.defineProperty(Array.prototype, i, {
    get: function () {},
    set: function (_value) {}
  });
}
var str = "1a2";
var replacer = function () {
  return "b";
};