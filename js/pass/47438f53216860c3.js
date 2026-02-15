var trapCalls = 0;
var p = new Proxy({}, {
  getOwnPropertyDescriptor: function (t, prop) {
    Object.defineProperty(t, prop, {
      configurable: false,
      writable: true
    });
    trapCalls++;
    return {
      configurable: false,
      writable: false
    };
  }
});