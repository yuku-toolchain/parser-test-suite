var x = 0;
var env = {
  x: 1
};
env[Symbol.unscopables] = {};
with (env) {}
env[Symbol.unscopables].x = false;
with (env) {}
env[Symbol.unscopables].x = undefined;
with (env) {}
env[Symbol.unscopables].x = null;
with (env) {}
env[Symbol.unscopables].x = 0;
with (env) {}
env[Symbol.unscopables].x = '';
with (env) {}