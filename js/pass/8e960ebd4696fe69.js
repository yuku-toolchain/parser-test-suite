var count = 0;
var {...x} = {
  get v() {
    count++;
    return 2;
  }
};