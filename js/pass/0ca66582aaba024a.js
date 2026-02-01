var regex = /a/g;
Object.defineProperty(regex, 'flags', {
  value: undefined
});
Object.defineProperty(RegExp.prototype, 'flags', {
  get: function () {
    return undefined;
  }
});