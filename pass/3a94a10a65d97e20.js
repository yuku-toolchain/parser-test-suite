var calls, val;
val = {
  toString: function () {
    calls += 'toString';
    return {};
  },
  valueOf: function () {
    calls += 'valueOf';
  }
};
calls = '';
Symbol(val);
val = {
  toString: function () {
    calls += 'toString';
  },
  valueOf: function () {
    calls += 'valueOf';
  }
};
calls = '';
Symbol(val);
val = {
  toString: null,
  valueOf: function () {
    calls += 'valueOf';
  }
};
calls = '';
Symbol(val);
val = {
  toString: null,
  valueOf: function () {
    calls += 'valueOf';
    return {};
  }
};
calls = '';
val = {
  toString: function () {
    calls += 'toString';
    return {};
  },
  valueOf: function () {
    calls += 'valueOf';
    return {};
  }
};
calls = '';