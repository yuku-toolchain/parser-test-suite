class MyError extends Error {}
const error1 = new MyError();
const error2 = new MyError();
const error3 = new MyError();
try {
  using _1 = {
    [Symbol.dispose]() {
      throw error1;
    }
  };
  using _2 = {
    [Symbol.dispose]() {
      throw error2;
    }
  };
  throw error3;
} catch (e) {}