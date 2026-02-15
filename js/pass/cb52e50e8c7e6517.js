let valueOf_calls = 0;
const n = {
  valueOf: function () {
    valueOf_calls++;
  }
};
Math.min(NaN, n);