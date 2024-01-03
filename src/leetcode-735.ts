/**
 * Problem 735: Asteroid Collision
 *
 * Constraints:
 *  1. 2 <= asteroids.length <= 10^4
 *  2. -1000 <= asteroids[i] <= 1000
 *  3. asteroids[i] != 0
 */

/**
 * <solution type>
 *
 * Complexity: <time complexity> and <space complexity>.
 */
function asteroidCollision(asteroids: number[]): number[] {
  const rAsteroids: number[] = [];
  const lAsteroids: number[] = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) rAsteroids.push(asteroid);
    else lAsteroids.push(asteroid);

    while (rAsteroids.length && lAsteroids.length) {
      const rAsteroid = rAsteroids.at(-1);
      const lAsteroid = lAsteroids.at(-1);

      if (Math.abs(rAsteroid) === Math.abs(lAsteroid)) {
        rAsteroids.pop();
        lAsteroids.pop();
      } else if (Math.abs(rAsteroid) > Math.abs(lAsteroid)) lAsteroids.pop();
      else rAsteroids.pop();
    }
  }
  console.log(`Right Asteroids: ${rAsteroids.toString()}`);
  console.log(`Left Asteroids ${lAsteroids.toString()}`);

  return rAsteroids.concat(lAsteroids);
}
