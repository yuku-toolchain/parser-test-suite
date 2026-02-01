var ranCatch = false;
try {
  throw {
    w: [7, undefined]
  };
} catch ({w: [x, y, z] = [4, 5, 6]}) {
  ranCatch = true;
}