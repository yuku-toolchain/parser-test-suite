var got = 0;
var x = {
  get y() {
    got += 1;
  }
};
void await x.y;