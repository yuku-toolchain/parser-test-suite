var thisValue = /abc/gim;
var pattern = /def/mig;
var flagsCount = 0;
var globalCount = 0;
var ignoreCaseCount = 0;
var multilineCount = 0;
var stickyCount = 0;
var unicodeCount = 0;
var counters = {
  flags: {
    get: function () {
      flagsCount += 1;
    }
  },
  global: {
    get: function () {
      globalCount += 1;
    }
  },
  ignoreCase: {
    get: function () {
      ignoreCaseCount += 1;
    }
  },
  multiline: {
    get: function () {
      multilineCount += 1;
    }
  },
  sticky: {
    get: function () {
      stickyCount += 1;
    }
  },
  unicode: {
    get: function () {
      unicodeCount += 1;
    }
  }
};
Object.defineProperties(thisValue, counters);
Object.defineProperties(pattern, counters);
thisValue.compile(thisValue);
thisValue.compile(pattern);
thisValue.compile(thisValue);