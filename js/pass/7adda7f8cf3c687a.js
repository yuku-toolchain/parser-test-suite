let templates = [];
function tag(templateObject) {
  templates.push(templateObject);
}
let a = 1;
for (let i = 0; i < 2; i++) {
  tag`head${a}tail`;
}