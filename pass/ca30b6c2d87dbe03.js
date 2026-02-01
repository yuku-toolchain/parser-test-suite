var object = {
  valueOf() {
    return "+";
  }
};
var x = new Array(object);
var object = {
  valueOf() {
    return "+";
  },
  toString() {
    return "*";
  }
};
var x = new Array(object);
var object = {
  valueOf() {
    return "+";
  },
  toString() {
    return {};
  }
};
var x = new Array(object);
var object = {
  valueOf() {
    throw "error";
  },
  toString() {
    return "*";
  }
};
var x = new Array(object);
var object = {
  toString() {
    return "*";
  }
};
var x = new Array(object);
var object = {
  valueOf() {
    return {};
  },
  toString() {
    return "*";
  }
};
var x = new Array(object);