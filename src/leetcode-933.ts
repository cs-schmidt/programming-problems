/**
 * Problem 933: Number of Recent Calls
 *
 * Constraints:
 *  1. 1 <= t <= 10^9
 *  2. Each test case will call ping with strictly increasing values of t.
 *  3. At most 10^4 calls will be made to ping.
 */

class RecentCounter {
  requests: number[];

  constructor() {
    this.requests = [];
  }

  ping(time: number): number {
    this.requests.push(time);

    let recentReqCount = 0;
    let i = this.requests.length - 1;

    while (this.requests[i] >= time - 3000 && this.requests[i] <= time) {
      recentReqCount += 1;
      i -= 1;
    }

    return recentReqCount;
  }
}
