const a = 'global';
function fn() {
  const a = 'local';
  return eval?.('a');
}
const b = (a => eval?.('a'))('local');