var i = Array.prototype.lastIndexOf.call({
  length: {
    valueOf: function () {
      return 0;
    }
  }
}, 1);