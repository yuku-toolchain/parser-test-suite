const realm = new ShadowRealm();
Object.defineProperty(realm, 'foo', {
  configurable: true
});
Object.defineProperty(realm, 'foo', {
  value: 'bar',
  writable: true,
  configurable: true,
  enumerable: false
});