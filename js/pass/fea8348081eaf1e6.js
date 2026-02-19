var array = [2, 4, 8, 16, 32, 64, 128];
var obj = {
  [Symbol.iterator]() {
    return {
      index: 0,
      next() {
        return {
          value: this.val,
          done: this.isDone
        };
      },
      isDone: false,
      get val() {
        this.index++;
        if (this.index > 7) {
          this.isDone = true;
        }
        return 1 << this.index;
      }
    };
  }
};
var a = Array.from.call(Object, obj);
for (var j = 0; j < a.length; j++) {}