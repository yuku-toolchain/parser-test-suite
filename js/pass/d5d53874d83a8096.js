var count = 0;
var callCount = 0;
var f;
f = ({...x}) => {
  callCount = callCount + 1;
};
f({
  get v() {
    count++;
    return 2;
  }
});