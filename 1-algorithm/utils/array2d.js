function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      let row = '';
      for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + ' '; // 使用空格分隔每个元素
      }
      console.log(row.trim()); // 打印每一行并移除末尾的空格
    }
  }
  
  module.exports = printMatrix;
  