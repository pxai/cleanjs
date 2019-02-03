const scopeBad = () => {
  const numbers = [3, 4, 1, 5, 0];
  const odds = numbers.map( (number, index) => number % 2 !== 0);
};

const scope = () => {
  const numbers = [3, 4, 1, 5, 0];
  const odds = numbers.map( (n, i) => n % 2 !== 0);
};
