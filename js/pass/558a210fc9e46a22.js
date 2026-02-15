var o = {
  p: 1
};
var s = "2";
var n = 2;
var capture = [];
var leftValue = {
  valueOf() {
    capture.push("leftValue");
    return 3;
  }
};
var rightValue = {
  valueOf() {
    capture.push("rightValue");
    return 2;
  }
};
(capture.push("left"), leftValue) ** +(capture.push("right"), rightValue);