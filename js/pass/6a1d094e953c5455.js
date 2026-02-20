var set = Object.getOwnPropertyDescriptor({
  set m(x = 42) {}
}, 'm').set;