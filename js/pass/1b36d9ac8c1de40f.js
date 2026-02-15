var key = {
  [Symbol.toPrimitive]: function (hint) {
    return 'key';
  }
};
var result = Object.fromEntries([[key, 'value']]);