let effects = [];
Iterator.prototype.reduce.call({
  get next() {
    effects.push('get next');
    return function () {
      return {
        done: true,
        value: undefined
      };
    };
  }
}, () => {}, {
  valueOf() {
    effects.push('initial value valueOf');
  }
});