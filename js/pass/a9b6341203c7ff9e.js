Object.defineProperty(BigInt.prototype, "toJSON", {
  get() {
    "use strict";
    return () => typeof this;
  }
});