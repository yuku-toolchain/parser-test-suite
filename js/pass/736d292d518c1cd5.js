var obj = {
  flags: ''
};
RegExp.prototype[Symbol.split].call(obj);
obj.constructor = false;
obj.constructor = 'string';
obj.constructor = Symbol.split;
obj.constructor = 86;
obj.constructor = null;