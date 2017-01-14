// const sudokuCheck = (boardStr) => {
//   let result = 'solved';
//
//   const rows = boardStr.split('\n');
//   const columns = [];
//   const region = [];
//
//   // for (let i = 0; i < rows.length; i++) {
//   //   const temp = [];
//   //   for (let j = 0; j < rows.length; j++) {
//   //     temp.push(rows[j][i]);
//   //   }
//   //
//   //   const col = temp.join('');
//   //   columns.push(col);
//   // }
//
//   for (let colIndex = 0; colIndex < rows.length; colIndex += 3) {
//     for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 3){
//       const square = [];
//       for (let i = rowIndex; i < rowIndex + 3; i ++) {
//         const squareTemp = [];
//         for (let j = colIndex; j < colIndex + 3; j++) {
//           squareTemp.push(rows[j][i]);
//         }
//
//         square.push(squareTemp.join(''));
//       }
//
//       region.push(square.join(''));
//     }
//   }
//
//   // rows.forEach((row) => {
//   //   for (let i = 1; i < 10; i++) {
//   //     if (row.split(i).length - 1 !== 1) {
//   //       result = 'invalid';
//   //     }
//   //   }
//   // });
//
//   // columns.forEach((col) => {
//   //   for (let i = 1; i < 10; i++) {
//   //     if (col.split(i).length - 1 !== 1) {
//   //       result = 'invalid';
//   //     }
//   //   }
//   // });
//
//   region.forEach((reg) => {
//     for (let i = 1; i < 10; i++) {
//       if (reg.split(i).length - 1 !== 1) {
//         result = 'invalid';
//       }
//     }
//   });
//
//   return result;
// };


const sudokuCheck = (boardStr) => {
  let result = 'solved';

  const rows = boardStr.split('\n');
  const region = [];

  for (let colIndex = 0; colIndex < rows.length; colIndex += 3) {
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 3){
      const square = [];
      for (let i = rowIndex; i < rowIndex + 3; i ++) {
        const squareTemp = [];
        for (let j = colIndex; j < colIndex + 3; j++) {
          squareTemp.push(rows[j][i]);
        }

        square.push(squareTemp.join(''));
      }

      region.push(square.join(''));
    }
  }

  region.forEach((reg) => {
    for (let i = 1; i < 10; i++) {
      if (reg.split(i).length - 1 !== 1) {
        result = 'invalid';
      }
    }
  });

  return result;
};

const str1 ='735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429'
const str2 ='111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999'
const str3 ='895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241'
const str4 ="795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538"
const str5 ="215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156"
const str6 ="123123123\n456456456\n789789789\n123123123\n456456456\n789789789\n123123123\n456456456\n789789789"
// console.log(sudokuCheck(str1));
// console.log(sudokuCheck(str2));
// console.log(sudokuCheck(str3));
// console.log(sudokuCheck(str5));
console.log(sudokuCheck(str6));
