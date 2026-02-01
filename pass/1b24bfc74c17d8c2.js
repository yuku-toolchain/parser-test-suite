let calls = 0;
let replaceValue = /$/;
let oldToString = replaceValue.toString.bind(replaceValue);
replaceValue.toString = () => {
  calls += 1;
  return oldToString();
};
let newString = ("").replace("a", replaceValue);