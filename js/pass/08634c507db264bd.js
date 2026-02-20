let a = [], b = [];
for (let i = 0, j = 10; i < 5; (++i, ++j)) {
  a.push(function () {
    return i;
  });
  b.push(function () {
    return j;
  });
}
for (let k = 0; k < 5; ++k) {}