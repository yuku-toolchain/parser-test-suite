var __executed = (/([\S]+([ \t]+[\S]+)*)[ \t]*=[ \t]*[\S]+/).exec("Course_Creator = Test");
var __expected = ["Course_Creator = Test", "Course_Creator", undefined];
__expected.index = 0;
__expected.input = "Course_Creator = Test";
for (var index = 0; index < __expected.length; index++) {}