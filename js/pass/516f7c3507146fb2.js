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
(capture.push("left"), leftValue) ** (capture.push("right"), rightValue);