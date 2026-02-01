var count = 0;
let {...x} = {
  get v() {
    count++;
    return 2;
  }
};