'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => (b) => {
    count++;

    if (count >= 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
