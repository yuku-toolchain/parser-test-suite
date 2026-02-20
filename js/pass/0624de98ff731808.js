const poisoned = {
  valueOf: function () {}
};
if (typeof Float16Array !== 'undefined') {}