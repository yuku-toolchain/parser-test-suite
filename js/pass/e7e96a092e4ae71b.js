async function foo() {
  let x = 'initial value';
  let shouldNotBeAwaited = {
    then: function (onFulfilled) {
      x = 'unexpected then() call';
      Promise.resolve().then(onFulfilled);
    }
  };
  await false || shouldNotBeAwaited;
}