let object = new Intl.NumberFormat();
let newObject = Intl.NumberFormat.call(object);
let symbol = null;
let error = null;
try {
  let proxy = new Proxy(newObject, {
    get(target, property) {
      symbol = property;
      return target[property];
    }
  });
  Intl.NumberFormat.prototype.resolvedOptions.call(proxy);
} catch (e) {
  error = e;
}
if (error === null) {}