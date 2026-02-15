const custom = new Proxy(new Function(), {
  get(target, key) {
    if (key === 'prototype') {}
    return target[key];
  }
});