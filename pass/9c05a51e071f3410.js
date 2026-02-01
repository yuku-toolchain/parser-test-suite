var direct = {};
direct.prop = direct;
var indirect = {
  p1: {
    p2: {
      get p3() {
        return indirect;
      }
    }
  }
};