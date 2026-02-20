var iterCount = 0;
for (const {arrow = () => {}} of [{}]) {
  iterCount += 1;
}