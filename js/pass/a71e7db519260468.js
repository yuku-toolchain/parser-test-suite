var r = /./g;
r.exec = function () {
  return {
    0: {
      toString: function () {}
    }
  };
};