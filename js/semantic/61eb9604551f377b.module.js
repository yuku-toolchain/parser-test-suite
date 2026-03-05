try {
  throw "catchme";
} catch (e) {
  if (delete e) {}
  if (e !== "catchme") {}
}
try {
  throw "catchme";
} catch (e) {}
try {
  e;
} catch (err) {}