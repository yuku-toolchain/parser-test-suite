var lastIndexReads;
var result;
var r = /a/g;
function reset(value) {
  r.lastIndex = {
    valueOf: function () {
      lastIndexReads++;
      return value;
    }
  };
  lastIndexReads = 0;
}
reset(42);
result = r.exec('abc');
reset(-1);
result = r.exec('nbc');