try {
  with (undefined) x = 2;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}