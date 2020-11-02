/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  return(str.charAt(0).toUpperCase() + str.slice(1));
  }
ucFirst('в');
ucFirst('вася');
ucFirst('');
