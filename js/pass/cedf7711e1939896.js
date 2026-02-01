var p = Promise.resolve("foo");
Object.defineProperty(p, "constructor", {
  get: function () {}
});