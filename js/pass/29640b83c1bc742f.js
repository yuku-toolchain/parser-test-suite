let objs = [];
function tag(templateObject) {
  objs.push(templateObject);
}
for (let a = 0; a < 2; a++) {
  eval("\
    (function() {\
      for (let b = 0; b < 2; b++) {\
        tag`${a}${b}`;\
      }\
    })();\
  ");
}