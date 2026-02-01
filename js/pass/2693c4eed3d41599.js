var executed = false;
class C {
  #x = (0, eval)('executed = true; new.target;');
}