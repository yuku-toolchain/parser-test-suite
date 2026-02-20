{
  using xCls = class x {
    static [Symbol.dispose]() {}
  };
  using cls = class {
    static [Symbol.dispose]() {}
  };
  using xCls2 = class {
    static name() {}
    static [Symbol.dispose]() {}
  };
}