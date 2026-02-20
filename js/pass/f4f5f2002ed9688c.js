var gets = 0;
var counter = {
  valueOf: function () {
    gets++;
    return 0;
  }
};
var r = /./;
r.lastIndex = counter;
var result = r.exec('abc');