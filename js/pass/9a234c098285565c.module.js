var lol = false;
var x = {
  get y() {
    lol = true;
  }
};
var g = 42;
await /x.y/g;
if (lol) {} else {}