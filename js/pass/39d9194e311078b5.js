const segmenter = new Intl.Segmenter();
const input = "ABC";
const segments = segmenter.segment(input);
let next_result = "";
for (let i = 0; i < input.length; i++) {
  let containing_result = segments.containing(i);
  let msg = "containing(" + i + ") before the loop. ";
  for (let v of segments) {
    next_result += v.segment;
    next_result += ":";
    msg = "containing(" + i + ") inside the loop. ";
    containing_result = segments.containing(i);
  }
}