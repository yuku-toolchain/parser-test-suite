var hits = 0;
var value;
var _this_;
function Pack() {
  Object.defineProperty(this, "length", {
    set: function (len) {
      hits++;
      value = len;
      _this_ = this;
    }
  });
}
var result = Array.of.call(Pack, 'wolves', 'cards', 'cigarettes', 'lies');