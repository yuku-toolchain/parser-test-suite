const r = new ShadowRealm();
let count = 0;
const specifier = Object.create(null);
specifier.valueOf = function () {
  count += 1;
};
count = 0;
specifier.valueOf = function () {
  count += 1000;
  throw new Error('valueOf is not reached if toString is present');
};
specifier.toString = function () {
  count += 1;
};
count = 0;
specifier[Symbol.toPrimitive] = function () {
  count += 1;
};
specifier.toString = function () {
  count += 1000;
  throw new Error('toString is not reached if @@toPrimitive is present');
};