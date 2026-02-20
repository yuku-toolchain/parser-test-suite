var count = 0;
for (let x = 0; x < 10; ) {
  x++;
  count++;
  {
    let x = "hello";
    continue;
  }
}