var unscopablesGetterCalled = 0;
var a, b, flag = true;
with (a = {
  x: 7
}) {
  with (b = {
    x: 4,
    get [Symbol.unscopables]() {
      unscopablesGetterCalled++;
      return {
        x: flag = !flag
      };
    }
  }) {
    x++;
  }
}
unscopablesGetterCalled = 0;
flag = true;
with (a = {
  x: 7
}) {
  with (b = {
    x: 4,
    get [Symbol.unscopables]() {
      unscopablesGetterCalled++;
      return {
        x: flag = !flag
      };
    }
  }) {
    x--;
  }
}