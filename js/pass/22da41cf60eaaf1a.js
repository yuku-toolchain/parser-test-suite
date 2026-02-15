delete Object.prototype.toString;
try {
  Object.prototype.toString();
} catch (e) {}