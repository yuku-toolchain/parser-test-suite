var result;
(function () {
  try {
    throw function () {
      this._12_14_16_foo = "test";
    };
  } catch (e) {
    var obj = {};
    obj.test = function () {
      this._12_14_16_foo = "test1";
    };
    e = obj.test;
    e();
    result = global._12_14_16_foo;
  }
})();