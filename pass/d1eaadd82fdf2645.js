var r = /b/g;
var callCount = 0;
Object.defineProperty(r, 'exec', {
  get: function () {
    Object.defineProperty(r, 'lastIndex', {
      writable: false
    });
  }
});