const transpose = function(matrix) {
  const matrixTrans = [];
  for(let i = 0; i < matrix[0].length; i++) {
    const matrixTransRow = [];
    for(let j = 0; j < matrix.length; j++) {
      matrixTransRow.push(matrix[j][i]);
    } matrixTrans.push(matrixTransRow)
  } return matrixTrans
};

module.exports = transpose;