const segmenter = new Intl.Segmenter();
const input1 = "ABCD";
const input2 = "123";
const segments1 = segmenter.segment(input1);
const segments2 = segmenter.segment(input2);
let result = "";
for (let v1 of segments1) {
  for (let v2 of segments2) {
    result += v1.segment;
    result += v2.segment;
  }
  result += ":";
}
for (let v2 of segments2) {
  for (let v1 of segments1) {
    result += v2.segment;
    result += v1.segment;
  }
  result += ":";
}