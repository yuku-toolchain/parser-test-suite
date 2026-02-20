var gets = 0;
var counter = {
  valueOf: function () {
    gets++;
    return 0;
  }
};
var r = /a/;
r.lastIndex = counter;
var result = r.exec('nbc');