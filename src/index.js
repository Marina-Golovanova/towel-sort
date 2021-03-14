
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  let newList = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      newList = newList.concat(matrix[i].reverse());
    } else {
      newList = newList.concat(matrix[i])
    }
  }
  return newList
}

