var x = 1 + (function (t) {
  return {
    a: t
  };
})(2 + 3).a;
if (x !== 6) {}