var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var callCount = 0;
var obj = {
  method({} = obj) {
    callCount = callCount + 1;
  }
};
obj.method();