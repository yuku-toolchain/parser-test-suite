var i = Array.prototype.indexOf.call({
  length: {
    valueOf: function () {
      return 0;
    }
  }
}, 1);