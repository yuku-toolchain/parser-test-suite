var i = 0;
woohoo: {
  while (true) {
    i++;
    if (i == 10) {
      break woohoo;
    }
  }
}