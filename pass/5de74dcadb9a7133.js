try {
  while ((function () {
    throw 1;
  })()) __in__while = "reached";
} catch (e) {
  if (e !== 1) {}
}
if (typeof __in__while !== "undefined") {}