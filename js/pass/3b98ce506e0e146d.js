var array = ["first", "second"];
Object.defineProperty(array, 0, {
  get: function () {
    array.length = 0;
    return "first";
  }
});
array.reverse();