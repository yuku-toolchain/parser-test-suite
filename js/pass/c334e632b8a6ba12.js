var i = 0;
(function () {
  for (var value of arguments) {
    i++;
  }
})(0, 'a', true, false, null, undefined, NaN);