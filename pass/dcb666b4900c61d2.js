var other = $262.createRealm().global;
var localArgs = (function () {
  "use strict";
  return arguments;
})();
var otherArgs = new other.Function('"use strict"; return arguments;')();
var otherArgs2 = new other.Function('"use strict"; return arguments;')();
var localThrowTypeError = Object.getOwnPropertyDescriptor(localArgs, "callee").get;
var otherThrowTypeError = Object.getOwnPropertyDescriptor(otherArgs, "callee").get;
var otherThrowTypeError2 = Object.getOwnPropertyDescriptor(otherArgs, "callee").get;