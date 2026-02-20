var ranCatch = false;
try {
  throw [];
} catch ([arrow = () => {}]) {
  ranCatch = true;
}