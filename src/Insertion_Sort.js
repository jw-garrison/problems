// function insertionSort(array) {
//   const inputs = array.slice(1);
//   let sorted = array.slice(0, 1);
//
//   for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
//     const input = inputs[inputIndex];
//     const smallest = sorted[0];
//     const biggest = sorted[sorted.length - 1];
//     console.log(`input: ${input.value}, smallest: ${smallest.value}, biggest: ${biggest.value}`);
//
//     if (input.value < smallest.value) {
//       sorted = [input, ...sorted];
//       console.log('input is smaller than smallest, updated sorted: ', sorted);
//     } else if (biggest.value < input.value) {
//       sorted = [...sorted, input];
//       console.log('biggest < input: sorted ', sorted);
//     } else {
//       console.log(`sorted array length: ${sorted.length}`);
//       for (let sortIndex = sorted.length - 1; sortIndex > -1; sortIndex--) {
//         const target = sorted[sortIndex];
//         if (input.value < target.value) {
//           console.log('input is smaller than target');
//           const smaller = sorted.slice(0, sortIndex);
//           const bigger = sorted.slice(sortIndex);
//           console.log('smaller than inputs: ', smaller, 'bigger than inputs: ', bigger);
//           sorted = [...smaller, input, ...bigger];
//         } if (input.value === target.value){
//           console.log('sorted: ', sorted);
//           console.log(`input.value, ${input.value}, target.value ${target.value}`);
//             if (input.order < target.order) {
//               console.log('input has higher order');
//               console.log(`input order ${input.order}, target order ${target.order}`);
//               const correctOrder = [input, target]
//               console.log('correctOrder ', correctOrder);
//               const smaller = sorted.slice(0, sortIndex);
//               const bigger = sorted.slice(sortIndex + 2);
//               console.log('smaller: ', smaller, 'bigger: ', bigger);
//               sorted = [...smaller, ...correctOrder, ...bigger];
//             }
//         }
//         console.log(`input: ${input.value} target: ${target.value}`);
//       }
//     }
//     console.log('----------');
//   }
//   console.log('+++++++++');
//   return sorted;
// }

// function insertionSort(array) {
//   const inputs = array.slice(1);
//   let sorted = array.slice(0, 1);
//
//   for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
//     const input = inputs[inputIndex];
//     const smallest = sorted[0];
//     const biggest = sorted[sorted.length - 1];
//
//     if (input.value < smallest.value) {
//       sorted = [input, ...sorted];
//     } else if (biggest.value < input.value) {
//       sorted = [...sorted, input];
//     } else {
//       for (let sortIndex = sorted.length - 1; sortIndex > -1; sortIndex--) {
//         const target = sorted[sortIndex];
//
//         if (input.value < target.value) {
//           const smaller = sorted.slice(0, sortIndex);
//           const bigger = sorted.slice(sortIndex);
//
//           sorted = [...smaller, input, ...bigger];
//         }
//
//         if (input.value === target.value && input.order < target.order) {
//           const correctOrder = [input, target];
//           const smaller = sorted.slice(0, sortIndex);
//           const bigger = sorted.slice(sortIndex + 2);
//
//           sorted = [...smaller, ...correctOrder, ...bigger];
//         }
//       }
//     }
//   }
//
//   return sorted;
// }

function insertionSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  const inputs = array.slice(1);
  let sorted = array.slice(0, 1);

  inputs.forEach((input) => {
    const smallest = sorted[0];
    const biggest = sorted[sorted.length - 1];

    if (input.value < smallest.value) {
      sorted = [input, ...sorted];
    } else if (biggest.value < input.value) {
      sorted = [...sorted, input];
    } else {
      for (let insertIndex = sorted.length - 1; insertIndex > -1; insertIndex--) {
        const target = sorted[insertIndex];

        if (input.value < target.value) {
          const smaller = sorted.slice(0, insertIndex);
          const bigger = sorted.slice(insertIndex);

          sorted = [...smaller, input, ...bigger];
        } else if (input.value === target.value && input.order < target.order) {
          const correctOrder = [input, target];
          const smaller = sorted.slice(0, insertIndex);
          const bigger = sorted.slice(insertIndex + 2);

          sorted = [...smaller, ...correctOrder, ...bigger];
        }
      }
    }
  });

  return sorted;
}

console.log(insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ]));
console.log(insertionSort([ { "value": 10 }, { "value": 5, "order": 2 }, { "value": 5, "order": 1 }]));
console.log(insertionSort([ { "value": 10 }, { "value": 5, "order": 3 }, { "value": 5, "order": 2 }, { "value": 5, "order": 1 }]));
