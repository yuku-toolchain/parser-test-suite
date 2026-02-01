var r = /./g;
var nextMatch;
r.exec = function () {
  var thisMatch = nextMatch;
  if (thisMatch === null) {
    return null;
  }
  nextMatch = null;
  return {
    get 0() {
      r.lastIndex = {
        valueOf: function () {}
      };
      return thisMatch;
    }
  };
};
nextMatch = '';