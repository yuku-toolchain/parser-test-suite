let x = 1;
let ranCatch = false;
try {
  x = 2;
  throw new Error();
} catch {
  let x = 3;
  let y = true;
  ranCatch = true;
}