var obj = {
  "0": "a",
  "1": "b"
};
obj.length = 0.1;
obj.length = 0.99;
obj.length = 1.00001;
obj.length = 1.1;
obj.length = "0";
obj.length = "1";
obj.length = "1";
obj.length = "2";
obj.length = "";
obj.length = undefined;
obj.length = NaN;
obj.length = [];
obj.length = [1];
obj.length = null;
obj.length = false;
obj.length = true;
obj.length = {
  valueOf: function () {
    return 2;
  }
};
obj.length = {
  toString: function () {
    return 2;
  }
};