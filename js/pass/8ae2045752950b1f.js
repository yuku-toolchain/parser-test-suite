class Base {}
(function () {
  class C extends Base {
    constructor() {
      var y;
      super();
    }
  }
  new C();
})();
(function () {
  class C extends Base {
    constructor() {
      {
        super(1, 2);
      }
    }
  }
  new C();
})();
(function () {
  class C extends Base {
    constructor() {
      if (1) super();
    }
  }
  new C();
})();
class C1 extends Object {
  constructor() {
    'use strict';
    super();
  }
}
new C1();
class C2 extends Object {
  constructor() {
    'use strict';
    super();
  }
}
new C2();
class C3 extends Object {
  constructor() {
    'use strict';
    super();
  }
}
new C3();