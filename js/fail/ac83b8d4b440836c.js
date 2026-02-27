var obj = new Test262Error();
try {
  await Promise.reject(obj);
} catch (e) {}