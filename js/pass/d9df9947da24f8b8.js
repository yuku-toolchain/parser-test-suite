let groupNames = Object.getOwnPropertyNames((/(?<fst>.)|(?<snd>.)/du).exec("abcd").indices.groups);
let counter = 0;
Object.defineProperty(Object.prototype, 'x', {
  set() {
    counter++;
  }
});
let indices = (/(?<x>.)/d).exec('a').indices;
let groups = indices.groups;