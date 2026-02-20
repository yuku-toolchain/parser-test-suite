var match = String.prototype.match.bind(this);
try {
  this.toString = Object.prototype.toString;
} catch (e) {}
if (this.toString === Object.prototype.toString && match(eval("\"bj\""))[0] !== "bj") {}