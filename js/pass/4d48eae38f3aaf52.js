var getCalls = 0;
var value = {
  get key() {
    getCalls += 1;
    return true;
  }
};