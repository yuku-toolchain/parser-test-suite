var dt = new Date(NaN);
var valueOfCalled = 0;
var value = {
  valueOf() {
    valueOfCalled++;
    dt.setTime(0);
    return 1;
  }
};
var result = dt.setMinutes(value);