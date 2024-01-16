/**
 * Problem 2622: Cache With Time Limit
 *
 * Constraints:
 *  1. 0 <= key, value <= 109
 *  2. 0 <= duration <= 1000
 *  3. 1 <= actions.length <= 100
 *  4. actions.length === values.length
 *  5. actions.length === timeDelays.length
 *  6. 0 <= timeDelays[i] <= 1450
 *  7. actions[i] is one of "TimeLimitedCache", "set", "get" and "count"
 *  8. First action is always "TimeLimitedCache" and must be executed
 *     immediately, with a 0-millisecond delay
 */

/** Represents a cache with time-limited entries. */
class TimeLimitedCache {
  constructor() {
    this.cache = {};
    this.size = 0;
  }

  set(key, value, duration) {
    if (!Object.hasOwn(this.cache, key)) {
      this.cache[key] = {
        value,
        lifeTime: setTimeout(this.delete.bind(this), duration, key)
      };
      this.size += 1;
      return false;
    }
    clearTimeout(this.cache[key].lifeTime);
    this.cache[key].value = value;
    this.cache[key].lifeTime = setTimeout(
      this.delete.bind(this),
      duration,
      key
    );
    return true;
  }

  get(key) {
    return this.cache[key]?.value ?? -1;
  }

  count() {
    return this.size;
  }

  delete(key) {
    if (Object.hasOwn(this.cache, key)) {
      delete this.cache[key];
      this.size -= 1;
    }
  }
}
