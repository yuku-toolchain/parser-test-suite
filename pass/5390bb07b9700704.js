let object = new Intl.DateTimeFormat();
let newObject = Intl.DateTimeFormat.call(object);
let symbol = null;
let error = null;
try {
  let proxy = new Proxy(newObject, {
    get(target, property) {
      symbol = property;
      return target[property];
    }
  });
  Intl.DateTimeFormat.prototype.resolvedOptions.call(proxy);
} catch (e) {
  error = e;
}
if (error === null) {}