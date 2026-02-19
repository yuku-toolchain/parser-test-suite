try {
  new encodeURIComponent();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}