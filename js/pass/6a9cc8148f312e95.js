Boolean.prototype.length = 2;
Boolean.prototype[0] = 0;
Boolean.prototype[1] = 1;
Boolean.prototype.length = 3;
delete Boolean.prototype[0];
delete Boolean.prototype[1];
delete Boolean.prototype.length;
Boolean.prototype[0] = "monkeys";
Boolean.prototype[2] = "bogus";