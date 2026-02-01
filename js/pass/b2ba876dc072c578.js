function DD_operator(f, delta) {
  return function (x) {
    return (f(x + delta) - 2 * f(x) + f(x - delta)) / (delta * delta);
  };
}
var DDsin;
DDsin = DD_operator(Math.sin, 0.00001);
if (DDsin(Math.PI / 2) + Math.sin(Math.PI / 2) > 0.00001) {}