var dt = new Date(0);
dt.setDate(2);
var valueOfCalled = 0;
var value = {
  valueOf() {
    valueOfCalled++;
    dt.setTime(NaN);
    return 1;
  }
};
var result = dt.setMonth(value);