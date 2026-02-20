const p = new Proxy({}, {
  preventExtensions() {
    return false;
  }
});