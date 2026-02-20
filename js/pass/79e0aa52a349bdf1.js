var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var iterCount = 0;
for (const {} of [obj]) {
  iterCount += 1;
}