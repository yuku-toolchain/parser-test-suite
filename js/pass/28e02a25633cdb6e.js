const locales = {
  length: 8,
  1: 'en-US',
  3: 'de-DE',
  5: 'en-IN',
  7: 'en-GB'
};
const actualLookups = [];
const handlers = {
  has(obj, prop) {
    actualLookups.push(prop);
    return Reflect.has(...arguments);
  }
};
const proxyLocales = new Proxy(locales, handlers);
const nf = new Intl.NumberFormat(proxyLocales);
for (let index in actualLookups) {}