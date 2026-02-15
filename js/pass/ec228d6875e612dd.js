var s = new Set([1]);
var usurper = {};
var counter = 0;
s.forEach(_ => {
  counter++;
}, usurper);