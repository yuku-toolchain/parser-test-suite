var symbol = Symbol('');
var target = {
  type: "json"
};
var descriptors = {
  type: {
    configurable: true,
    enumerable: true
  }
};
var log = [];
var options = {
  with: new Proxy({}, {
    ownKeys: function () {
      return ["type"];
    },
    get(_, name) {
      log.push(name);
      return "json";
    },
    getOwnPropertyDescriptor(target, name) {
      return {
        configurable: true,
        enumerable: true,
        value: "json"
      };
    }
  })
};
import('./2nd-param_FIXTURE.json').then(function (module) {}).then($DONE, $DONE);