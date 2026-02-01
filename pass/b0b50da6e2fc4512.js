let a = [];
for (let i = 0, f = function () {
  return i;
}; i < 5; ++i) {
  a.push(f);
}
for (let k = 0; k < 5; ++k) {}