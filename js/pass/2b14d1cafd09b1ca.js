var regexp = /./;
regexp.constructor = {
  get [Symbol.species]() {}
};