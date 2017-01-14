const zipSum = (xs, ys) => xs.map((el, i) => el + ys[i]).slice(0, Math.min(xs.length, ys.length));

console.log(zipSum([0,7,5,3,5,7,8,9,9,6,5,6,8,8], [1]));
