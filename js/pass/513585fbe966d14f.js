var result = Array.of();
result = Array.of.call(undefined);
result = Array.of.call(Math.cos);
result = Array.of.call(Math.cos.bind(Math));