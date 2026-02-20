var effects = [];
function makeEntry(label) {
  return {
    get '0'() {
      effects.push('access property "0" of ' + label + ' entry');
      return {
        toString: function () {
          effects.push('toString of ' + label + ' key');
          return label + ' key';
        }
      };
    },
    get '1'() {
      effects.push('access property "1" of ' + label + ' entry');
      return label + ' value';
    }
  };
}
var iterable = {
  [Symbol.iterator]: function () {
    effects.push('get Symbol.iterator');
    var count = 0;
    return {
      next: function () {
        effects.push('next ' + count);
        if (count === 0) {
          ++count;
          return {
            done: false,
            value: makeEntry('first', 'first key', 'first value')
          };
        } else if (count === 1) {
          ++count;
          return {
            done: false,
            value: makeEntry('second', 'second key', 'second value')
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
};
var result = Object.fromEntries(iterable);