var ranCatch = false;
try {
  throw [];
} catch ([_, x]) {
  ranCatch = true;
}