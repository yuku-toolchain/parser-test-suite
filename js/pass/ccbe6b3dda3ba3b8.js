if (!String.hasOwnProperty('prototype')) {}
try {
  if (delete String.prototype !== false) {}
} catch (e) {
  if (e instanceof Test262Error) throw e;
}
if (!String.hasOwnProperty('prototype')) {}