// To make a zipSum array, we need to add up the elements at the same index position..
//  in the two arrays we are given.

const zipSum = (xs, ys) => xs
  // First we want to find out which of xs and ys array is shorter since..
  //   you can't add if elements in one array doesn't have corresponding elements in the...
  //   other array at the same index position

  // It does't matter if you slice the xs array into ys array's length or...
  //   slice ys array into xs array's length it will be the same at the end.
  // Also, we could've have wrote more explicitly as xs.slice(0, Math.min(xs.length, ys.length))...
  //   but this approach works just as well because of the way slice method works.
  // if xs.length is larger, than xs will be sliced into the same length as ys...
  //   but what if ys.length is bigger? since supplying a value greater than the length will slice
  //   the array all the way to end, it wouldn't matter!

  // ie) [0, 1, 2].slice(0, 100) // [0, 1, 2]
  // ie) [0, 1, 2].slice(1, 1000) // [1, 2]

  .slice(0, ys.length)

  // after we slice the xs array, we are going to map xs each element...
  //   to be the sum of itself and corresponding element in the ys array
  .map((xsEl, i) => xsEl + ys[i]);

zipSum();
