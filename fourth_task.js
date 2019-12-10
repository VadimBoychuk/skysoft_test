const firstMethod = n => {
  const fib = [1, 1];
  if (n <= 2) {
    return fib.slice(0, n);
  } else {
    const prev = firstMethod(n - 1);
    return prev.concat(prev[n - 2] + prev[n - 3]);
  }
};
console.log(firstMethod(1));
console.log(firstMethod(8));

const secondMethod = n => {
  const fib = [1, 1];
  if (n <= 2) {
    return fib.slice(0, n);
  } else {
    for (i = 0; i < n - 2; i++) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
  }
};

console.log(secondMethod(1));
console.log(secondMethod(10));
