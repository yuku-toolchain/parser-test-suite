const r = new ShadowRealm();
const anyMissed = r.evaluate(`
const esNonConfigValues = [
    'undefined',
    'Infinity',
    'NaN'
  ];
const entries = Object.entries(Object.getOwnPropertyDescriptors(globalThis));
const missed = entries
    .filter(entry => entry[1].configurable === false)
    .map(([name]) => name)
    .filter(name => !esNonConfigValues.includes(name))
    .join(', ');
missed;
`);
const result = r.evaluate(`
  const ObjectKeys = Object.keys;
  const hasOwn = Object.prototype.hasOwnProperty;
  const savedGlobal = globalThis;
  const names = Object.keys(Object.getOwnPropertyDescriptors(globalThis));
const esNonConfigValues = [
    'undefined',
    'Infinity',
    'NaN'
  ];
const remainingNames = names.filter(name => {
    if (esNonConfigValues.includes(name)) {
      return false;
    }
if (name !== 'globalThis') {
      delete globalThis[name];
      return hasOwn.call(globalThis, name);
    }
  });
delete globalThis['globalThis'];
if (hasOwn.call(savedGlobal, 'globalThis')) {
    remainingNames.push('globalThis');
  }
const failedDelete = remainingNames.join(', ');
failedDelete;
`);