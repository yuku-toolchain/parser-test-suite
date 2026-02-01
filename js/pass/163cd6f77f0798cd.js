var i = 0;
woohoo: {
  do {
    i++;
    if (i == 10) {
      break woohoo;
    }
  } while (true);
}