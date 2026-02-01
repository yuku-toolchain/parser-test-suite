var x = 0;
var env = {
  x: 1
};
env[Symbol.unscopables] = {
  x: true
};
with (env) {}
env[Symbol.unscopables].x = 'string';
with (env) {}
env[Symbol.unscopables].x = 86;
with (env) {}
env[Symbol.unscopables].x = {};
with (env) {}
env[Symbol.unscopables].x = Symbol.unscopables;
with (env) {}