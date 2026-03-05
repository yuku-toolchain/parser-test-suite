var env = {
  x: 86
};
Object.defineProperty(env, Symbol.unscopables, {
  get: function () {}
});
with (env) {}