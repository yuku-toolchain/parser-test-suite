var callCount = 0;
var _this, _key;
var obj = {
  toJSON: function (key) {
    callCount += 1;
    _this = this;
    _key = key;
  }
};