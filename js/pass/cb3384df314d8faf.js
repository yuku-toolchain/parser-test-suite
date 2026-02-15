var callCount = 0;
Object.defineProperty(this, Symbol.unscopables, {
  get: function () {
    callCount += 1;
  }
});
this.test262 = true;
test262;