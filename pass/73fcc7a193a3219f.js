try {
  (max_value in (max_value = "MAX_VALUE", Number));
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}