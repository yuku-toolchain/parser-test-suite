var ranCatch = false;
try {
  throw [[7, 8, 9]];
} catch ([[x, y, z] = [4, 5, 6]]) {
  ranCatch = true;
}