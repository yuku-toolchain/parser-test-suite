var callCount = 0;
(function () {
  callCount += 1;
})(...[3, 4, 5]);