let i = 0;
class C {
  [i++] = i++;
  static [i++] = i++;
  [i++] = i++;
}
let c = new C();