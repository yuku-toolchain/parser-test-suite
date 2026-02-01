var accessed = false;
var f = {
  length: 0
};
Object.defineProperty(f, "0", {
  get: function () {
    accessed = true;
    return 1;
  }
});
var i = Array.prototype.indexOf.call(f, 1);