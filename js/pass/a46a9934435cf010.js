var arr = ['Mike', 'Rick', 'Leo'];
var results = [];
arr.find(function (kValue, k, O) {
  results.push(arguments);
});
var result = results[0];
result = results[1];
result = results[2];