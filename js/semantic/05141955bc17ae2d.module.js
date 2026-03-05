var env = {
  x: 86
};
env[Symbol.unscopables] = {};
Object.defineProperty(env[Symbol.unscopables], 'x', {
  get: function () {}
});
with (env) {}