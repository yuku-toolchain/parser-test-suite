var ranCatch = false;
try {
  throw {};
} catch ({cover = function () {}, xCover = (0, function () {})}) {
  ranCatch = true;
}