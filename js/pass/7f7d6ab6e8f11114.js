var ranCatch = false;
try {
  throw [];
} catch ([[x, y, z] = [4, 5, 6]]) {
  ranCatch = true;
}