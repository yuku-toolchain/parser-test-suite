var obj = {};
try {
  Date.prototype.writable = true;
  var dateObj = new Date();
  Object.defineProperty(obj, "property", dateObj);
} finally {
  delete Date.prototype.writable;
}