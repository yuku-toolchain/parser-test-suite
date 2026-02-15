function CustomError() {}
var obj = {
  get flags() {
    throw new CustomError();
  },
  get global() {},
  get unicode() {}
};