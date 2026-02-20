var proxy = new Proxy({}, {
  ownKeys: function () {
    return ['a', 'a'];
  }
});