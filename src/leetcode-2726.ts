/**
 * Problem 2726: Calculator with Method Chaining
 *
 * Constraints:
 *  1. actions is a valid JSON array of strings
 *  2. values is a valid JSON array of numbers
 *  3. 2 <= actions.length <= 2 * 10^4
 *  4. 1 <= values.length <= 2 * 10^4 - 1
 *  5. actions[i] is one of "Calculator", "add", "subtract", "multiply",
 *     "divide", "power", and "getResult"
 *  6. First action is always "Calculator"
 *  7. Last action is always "getResult"
 */

class Calculator {
  #currentValue: number;

  constructor(value?: number) {
    this.#currentValue = value || 0;
  }

  add(value: number): Calculator {
    this.#currentValue += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.#currentValue -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.#currentValue *= value;
    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) throw Error('Division by zero is not allowed');
    this.#currentValue /= value;
    return this;
  }

  power(value: number): Calculator {
    this.#currentValue **= value;
    return this;
  }

  getResult(): number {
    return this.#currentValue;
  }
}
