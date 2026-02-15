var limit = 8640000000000000000000n;
TemporalHelpers.assertInstantsEqual(Temporal.Instant.fromEpochNanoseconds(-limit), Temporal.Instant.from("-271821-04-20T00:00:00Z"));
TemporalHelpers.assertInstantsEqual(Temporal.Instant.fromEpochNanoseconds(limit), Temporal.Instant.from("+275760-09-13T00:00:00Z"));