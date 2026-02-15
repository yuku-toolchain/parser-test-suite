var map = new Map();
map.getOrInsertComputed(-0, () => 42);
map = new Map();
map.getOrInsertComputed(+0, () => 43);