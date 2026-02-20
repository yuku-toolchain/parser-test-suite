function MyError() {}
Object.defineProperty(Set.prototype, 'add', {
  get: function () {
    throw new MyError();
  }
});
new Set();