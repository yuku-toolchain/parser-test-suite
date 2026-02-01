function __func(__arg) {
  __arg.foo = 7;
}
var __obj = {};
__func(__obj);
if (__obj.foo !== 7) {}