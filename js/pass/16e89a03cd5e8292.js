function MyFunct() {
  return 0;
}
if (MyFunct instanceof MyFunct) {}
if (MyFunct instanceof Function !== true) {}
if (MyFunct instanceof Object !== true) {}