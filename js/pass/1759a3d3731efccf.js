var ranCatch = false;
try {
  throw {
    x: 23
  };
} catch ({x}) {
  ranCatch = true;
}