var arr = [];
arr.verifySetter = 100;
Object.defineProperties(arr, {
  "0": {
    set: function (value) {
      arr.verifySetter = value;
    },
    get: function () {
      return arr.verifySetter;
    },
    enumerable: true
  }
});
if (!Object.prototype.hasOwnProperty.call(arr, "0")) {}
arr[0] = 101;
if (arr.verifySetter !== 101) {}