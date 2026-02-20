var iterCount = 0;
for (let {arrow = () => {}} of [{}]) {
  iterCount += 1;
}