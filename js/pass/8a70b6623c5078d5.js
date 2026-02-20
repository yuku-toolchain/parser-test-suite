var i = Array.prototype.indexOf.call({
  length: {
    toString: function () {
      return '0';
    }
  }
}, 1);