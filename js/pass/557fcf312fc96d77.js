var newTarget = null;
var obj = {
  get m() {
    newTarget = new.target;
  }
};
obj.m;