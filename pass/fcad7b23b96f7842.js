var custom = {};
custom[Symbol.toStringTag] = undefined;
custom[Symbol.toStringTag] = null;
custom[Symbol.toStringTag] = Symbol.toStringTag;
custom[Symbol.toStringTag] = 86;
custom[Symbol.toStringTag] = new String('test262');
custom[Symbol.toStringTag] = {};
custom[Symbol.toStringTag] = {
  toString: function () {
    return 'str';
  }
};