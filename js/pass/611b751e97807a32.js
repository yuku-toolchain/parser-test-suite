var log, obj;
log = '';
obj = {
  toString: function () {
    log += 'toString';
  },
  valueOf: function () {
    log += 'valueOf';
  }
};
escape(obj);
log = '';
obj = {
  toString: null,
  valueOf: function () {
    log += 'valueOf';
  }
};
escape(obj);
log = '';
obj = {
  toString: function () {
    log += 'toString';
    return {};
  },
  valueOf: function () {
    log += 'valueOf';
  }
};
escape(obj);