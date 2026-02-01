var symbol = Symbol('');
var target = {
  [symbol]: '',
  unreported: '',
  nonEnumerable: ''
};
var descriptors = {
  [symbol]: {
    configurable: true,
    enumerable: true
  },
  nonEnumerable: {
    configurable: true,
    enumerable: false
  }
};
var options = {
  with: new Proxy({}, {
    ownKeys: function () {
      return [symbol, 'nonEnumerable', 'absent'];
    },
    get() {
      throw new Error("Should not be called");
    },
    getOwnPropertyDescriptor(target, name) {
      return descriptors[name];
    }
  })
};
import('./2nd-param_FIXTURE.js').then(function (module) {}).then($DONE, $DONE);