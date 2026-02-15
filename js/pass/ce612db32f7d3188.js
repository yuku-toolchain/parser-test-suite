var x;
var count = 0;
var result;
var vals = {
  get v() {
    count++;
    return 2;
  }
};
result = {...x} = vals;