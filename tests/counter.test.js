import { useCounter } from '../src/composables/useCounter.js';

test('useCounter', () => {
  const { count, increment } = useCounter();
  expect(count.value).toBe(0);

  increment();
  expect(count.value).toBe(1);
});
