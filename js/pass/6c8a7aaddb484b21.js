{
  const origin = Temporal.ZonedDateTime.from('2025-11-02T01:00:00-08:00[America/Vancouver]');
  const dur = Temporal.Duration.from({
    hours: 2
  });
  const total = dur.total({
    unit: 'days',
    relativeTo: origin
  });
}
{
  const origin = Temporal.ZonedDateTime.from('2025-11-02T01:00:00-08:00[America/Vancouver]');
  const dur = Temporal.Duration.from({
    hours: -2
  });
  const total = dur.total({
    unit: 'days',
    relativeTo: origin
  });
}