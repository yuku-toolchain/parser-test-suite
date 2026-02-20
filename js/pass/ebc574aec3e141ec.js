const callOrder = [];
new Intl.ListFormat([], {
  get localeMatcher() {
    callOrder.push("localeMatcher");
    return {
      toString() {
        callOrder.push("localeMatcher toString");
        return "best fit";
      }
    };
  },
  get type() {
    callOrder.push("type");
    return {
      toString() {
        callOrder.push("type toString");
        return "unit";
      }
    };
  },
  get style() {
    callOrder.push("style");
    return {
      toString() {
        callOrder.push("style toString");
        return "short";
      }
    };
  }
});