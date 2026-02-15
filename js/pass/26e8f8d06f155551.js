var calls = 0;
class C {}
class D extends (calls++, C) {}