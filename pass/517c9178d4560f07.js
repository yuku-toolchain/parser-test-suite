var myobj1 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "67890";
  },
  valueOf: function () {
    return "[object MyObj]";
  }
};
var myobj2 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "67890";
  },
  valueOf: function () {
    return "9876543210";
  }
};
var myobj3 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "[object MyObj]";
  }
};
var myobj4 = {
  ToNumber: function () {
    return 12345;
  },
  toString: function () {
    return "67890";
  }
};
var myobj5 = {
  ToNumber: function () {
    return 12345;
  }
};