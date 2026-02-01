var arrObj = [];
Object.defineProperty(arrObj, "length", {
  value: {
    valueOf: function () {
      return 2;
    }
  }
});