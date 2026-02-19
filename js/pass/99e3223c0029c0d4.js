var __str__instance = new String("globglob");
if (!__str__instance.hasOwnProperty("length")) {}
try {
  if (delete __str__instance.length === true) {}
} catch (e) {
  if (e instanceof Test262Error) throw e;
}
if (!__str__instance.hasOwnProperty("length")) {}