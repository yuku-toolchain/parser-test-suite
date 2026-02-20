let counter = 0;
Object.defineProperty(Object.prototype, 'x', {
  set() {
    counter++;
  }
});
let match = (/(?<x>.)/).exec('a');
let groups = match.groups;