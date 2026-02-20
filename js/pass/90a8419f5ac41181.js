var dt = new Date(0);
var valueOfCalled = 0;
var value = {
  valueOf() {
    valueOfCalled++;
    dt.setTime(NaN);
    return 1;
  }
};
var result = dt.setDate(value);