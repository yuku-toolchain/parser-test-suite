var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var iterCount = 0;
for (var {} = obj; iterCount < 1; ) {
  iterCount += 1;
}