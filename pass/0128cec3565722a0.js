function MyError() {}
var index = {
  valueOf() {
    throw new MyError();
  }
};