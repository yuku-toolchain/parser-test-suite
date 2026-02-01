var ranCatch = false;
try {
  throw {
    x: [45]
  };
} catch ({x: [y]}) {
  ranCatch = true;
}