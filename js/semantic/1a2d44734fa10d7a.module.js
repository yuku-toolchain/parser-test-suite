try {
  with (null) x = 2;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}