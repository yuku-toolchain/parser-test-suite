var ranCatch = false;
try {
  throw {};
} catch ({gen = function* () {}, xGen = function* x() {}}) {
  ranCatch = true;
}