var ranCatch = false;
try {
  throw {};
} catch ({x: y = 33}) {
  ranCatch = true;
}