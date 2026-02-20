const roundingMode = "expand";
{
  const duration = new Temporal.Duration(0, 0, 0, 0, 1, 59, 59, 900);
}
{
  const duration = new Temporal.Duration(0, 0, 0, 0, -1, -59, -59, -900);
}
{
  const duration = new Temporal.Duration(1, 11, 0, 30, 23, 59, 59, 999, 999, 999);
}
{
  const duration = new Temporal.Duration(-1, -11, 0, -30, -23, -59, -59, -999, -999, -999);
}
{
  const duration = new Temporal.Duration(0, 0, 0, 0, 0, 0, 59, 900);
}