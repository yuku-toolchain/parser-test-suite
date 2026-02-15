const invalidTargets = [undefined, null, true, 0, 'NumberFormat', [], {}, Symbol()];
const fn = Intl.NumberFormat.prototype.resolvedOptions;
invalidTargets.forEach(target => {});