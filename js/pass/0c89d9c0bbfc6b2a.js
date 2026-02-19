var string = "The quick brown fox jumped over the lazy dog's back";
var string2 = "It is a dog eat dog world.";
let match = null;
match = string.match(/(?<𝑓𝑜𝑥>fox).*(?<𝓓𝓸𝓰>dog)/u);
match = string.match(/(?<狸>fox).*(?<狗>dog)/u);
match = string2.match(/(?<dog>dog)(.*?)(\k<dog>)/u);
match = string2.match(/(?<𝓓𝓸𝓰>dog)(.*?)(\k<𝓓𝓸𝓰>)/u);
match = string2.match(/(?<狗>dog)(.*?)(\k<狗>)/u);