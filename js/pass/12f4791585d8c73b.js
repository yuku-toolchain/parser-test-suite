var obj = {
  toString: function () {
    return 'toString value';
  }
};
var result;
result = (/ /)[Symbol.split](obj);