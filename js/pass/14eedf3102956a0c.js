const invalidTargets = [undefined, null, true, 0, 'NumberFormat', [], {}, Symbol()];
const fn = Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, 'format').get;
invalidTargets.forEach(target => {});