var callCount = 0;
new (function () {
  callCount += 1;
})(...[]);