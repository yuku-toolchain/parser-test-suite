function* g() {}
Iterator.from(g());
Iterator.from.call(null, g());