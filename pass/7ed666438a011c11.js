var count = 0;
label: for (let x = 0; x < 10; ) {
  while (true) {
    x++;
    count++;
    continue label;
  }
}