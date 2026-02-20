var callCount = 0;
(function () {
  callCount += 1;
})(5, ...[6, 7, 8], 9);