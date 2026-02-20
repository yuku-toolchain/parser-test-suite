this.count = 0;
var testScreen = {
  touch: function () {
    count++;
  }
};
testScreen.touch();
if (count !== 1) {}
testScreen['touch']();
if (count !== 2) {}