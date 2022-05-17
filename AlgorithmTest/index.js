const ALGORITHM_TEST_1 = "1";
const ALGORITHM_TEST_2 = "2";

const getAlgorithTestLink = testNumber => {
  switch (testNumber) {
    case ALGORITHM_TEST_1.toString():
      return "./1";
    case ALGORITHM_TEST_2.toString():
      return "./2";
    default:
      return ""
  }
}

module.exports = getAlgorithTestLink;