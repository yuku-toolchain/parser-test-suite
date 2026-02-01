var v1 = {};
var v2 = {};
var v3 = {};
Promise.all([v1, v2, v3]).then(function (values) {
  if (!values) {
    return;
  }
  if (values.constructor !== Array) {
    return;
  }
  if (values.length !== 3) {
    return;
  }
  if (values[0] !== v1) {
    return;
  }
  if (values[1] !== v2) {
    return;
  }
  if (values[2] !== v3) {
    return;
  }
}, function () {});