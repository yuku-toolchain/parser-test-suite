var getCount = 0, getContext;
var callCount = 0, callContext, callArguments;
var obj = {
  get toISOString() {
    getCount += 1;
    getContext = this;
    return function () {
      callCount += 1;
      callContext = this;
      callArguments = arguments;
    };
  }
};
Date.prototype.toJSON.call(obj);