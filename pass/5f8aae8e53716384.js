var badLength = new Proxy([], {
  get: function (_, name) {
    if (name === 'length') {}
  }
});