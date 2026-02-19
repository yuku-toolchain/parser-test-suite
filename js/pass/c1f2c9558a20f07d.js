var callCount = 0;
new (function () {
  callCount += 1;
})(...[3, 4, 5]);