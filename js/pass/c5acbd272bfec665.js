try {
  throw "catchme";
} catch (e) {
  if (e !== "catchme") {}
}