var ranCatch = false;
try {
  throw {
    x: 1,
    y: 2,
    a: 5,
    b: 3
  };
} catch ({a, b, ...rest}) {
  ranCatch = true;
}