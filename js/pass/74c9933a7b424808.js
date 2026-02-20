let count = 0;
const obj = {
  a: true
};
do {
  count++;
  break;
} while (obj?.a);