var case1 = {
  get [Symbol.iterator]() {}
};
var case2 = {
  get [Symbol.iterator]() {
    return {};
  }
};
var case3 = {
  [Symbol.iterator]() {}
};
var case4 = {
  [Symbol.iterator]() {
    return 'a string';
  }
};
var case5 = {
  [Symbol.iterator]() {
    return undefined;
  }
};
var case6 = {
  [Symbol.iterator]() {
    return {
      get next() {}
    };
  }
};
var case7 = {
  [Symbol.iterator]() {
    return {
      get next() {
        return {};
      }
    };
  }
};
var case8 = {
  [Symbol.iterator]() {
    return {
      next() {}
    };
  }
};
var case9 = {
  [Symbol.iterator]() {
    return {
      next() {
        return undefined;
      }
    };
  }
};
var case10 = {
  [Symbol.iterator]() {
    return {
      next() {
        return 'a string';
      }
    };
  }
};
var case11 = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          get done() {}
        };
      }
    };
  }
};