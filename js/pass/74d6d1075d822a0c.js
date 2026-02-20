var regexp = /./;
regexp.constructor = {
  [Symbol.species]: function () {
    return Object.defineProperty(/./, 'global', {
      get() {}
    });
  }
};
regexp[Symbol.matchAll]('');