if (isNaN(+({})) !== true) {}
if (isNaN(+(function () {
  return 1;
})) !== true) {}