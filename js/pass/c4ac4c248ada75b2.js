function hide(k, x) {
  if (k) {
    return hide(k - 3, x) + x;
  }
  return 0;
}