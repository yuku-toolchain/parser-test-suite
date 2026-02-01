var regexp = /./;
regexp.constructor = {
  [Symbol.species]: function () {
    return Object.defineProperty(/./, 'unicode', {
      get() {}
    });
  }
};
regexp[Symbol.matchAll]('');