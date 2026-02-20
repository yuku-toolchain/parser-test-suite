var executed = false;
class C {
  x = eval('executed = true; arguments;');
}