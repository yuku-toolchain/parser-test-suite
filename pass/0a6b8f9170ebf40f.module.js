var x;
try {
  await Promise.reject(42);
} catch (e) {
  x = e;
}
try {
  await Promise.reject('');
} catch (e) {
  x = e;
}
try {
  var s = Symbol();
  await Promise.reject(s);
} catch (e) {
  x = e;
}
try {
  await Promise.reject(false);
} catch (e) {
  x = e;
}
try {
  await Promise.reject(true);
} catch (e) {
  x = e;
}
try {
  await Promise.reject(NaN);
} catch (e) {
  x = e;
}
try {
  await Promise.reject(null);
} catch (e) {
  x = e;
}
try {
  await Promise.reject(undefined);
} catch (e) {
  x = e;
}
try {
  var obj = {};
  await Promise.reject(obj);
} catch (e) {
  x = e;
}