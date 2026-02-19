var uncoercibleFlags = {
  flags: {
    toString: function () {}
  }
};
uncoercibleFlags = {
  flags: Symbol.split
};