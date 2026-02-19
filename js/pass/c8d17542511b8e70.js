let effects = [];
Iterator.prototype.drop.call({
  get next() {
    effects.push('get next');
    return function () {
      return {
        done: true,
        value: undefined
      };
    };
  }
}, {
  valueOf() {
    effects.push('ToNumber limit');
    return 0;
  }
});
effects = [];
effects = [];