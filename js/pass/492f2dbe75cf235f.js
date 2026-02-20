var lastIndexReads = 0;
var r = /./g;
r.lastIndex = {
  valueOf: function () {
    lastIndexReads++;
    return 0;
  }
};
var result = r.exec('abc');