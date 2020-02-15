module.exports = function countCats(matrix) {
  return matrix.flat(Infinity).filter(e => e === '^^').length;
};
