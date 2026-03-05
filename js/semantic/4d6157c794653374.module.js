var thrower = new Proxy({}, {
  has: function (_, name) {
    if (name === 'test262') {}
  }
});
with (thrower) {}