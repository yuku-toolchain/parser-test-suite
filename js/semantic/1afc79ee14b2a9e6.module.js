ALIVE = "Letov is alive";
function __func() {
  return ALIVE;
}
if (delete __func) {}
if (__func() !== ALIVE) {}