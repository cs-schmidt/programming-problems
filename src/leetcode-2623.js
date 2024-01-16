/**
 * Problem 2623: Memoize
 *
 * Constraints:
 *  1. 0 <= a, b <= 10^5
 *  2. 1 <= n <= 10
 *  3. 0 <= actions.length <= 10^5
 *  4. actions.length === values.length
 *  5. actions[i] is one of "call" and "getCallCount"
 *  6. fnName is one of "sum", "factorial" and "fib"
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  return function memoizedFn(...args) {
    const argsCode = args.reduce((res, val) => `${res}|${val}`, '');
    if (Object.hasOwn(cache, argsCode)) return cache[argsCode];
    return (cache[argsCode] = fn(...args));
  };
}
