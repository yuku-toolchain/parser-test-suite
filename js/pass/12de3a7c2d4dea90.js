function CustomError() {}
let lf = new Intl.ListFormat();
let get_iterator_throw_error = {
  [Symbol.iterator]() {
    throw new CustomError();
  }
};