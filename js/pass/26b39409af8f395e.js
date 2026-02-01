try {
  ({}) instanceof this;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}