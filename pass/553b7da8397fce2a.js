var count = 0;
const {...x} = {
  get v() {
    count++;
    return 2;
  }
};