'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function operate(callback, value) {
    result = callback(value);

    return this;
  }

  function reset() {
    result = 0;

    return this;
  }

  function add(value) {
    result += value;

    return result;
  }

  function subtract(value) {
    result -= value;

    return result;
  }

  function multiply(value) {
    result *= value;

    return result;
  }

  function divide(value) {
    result /= value;

    return result;
  }

  return {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    operate,
    reset,
  };
}

module.exports = makeCalculator;
