var count = 0;
var ranCatch = false;
try {
  throw {
    get v() {
      count++;
      return 2;
    }
  };
} catch ({...x}) {
  ranCatch = true;
}