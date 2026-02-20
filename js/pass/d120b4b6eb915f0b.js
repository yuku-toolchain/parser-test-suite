var callCount = 0;
new (function () {
  callCount += 1;
})(1, 2, 3, ...[]);