const scopeBad = () => {
  const numbers = [3, 4, 1, 5, 0];
  const odds = numbers.map( (number, index) => number % 2 !== 0);

  numbers.map( (n, i) => {
    console.log(`Changing ${i} with ${n}`);
    const r = 0;
    //...
    //...
    console.log(`Result for ${i): ${r});
  });
};

const scope = () => {
  const numbers = [3, 4, 1, 5, 0];
  const odds = numbers.map( (n, i) => n % 2 !== 0);

  numbers.map( (number, index) => {
    console.log(`Changing ${index} with ${number}`);
    const result = 0;
    //...
    //...
    console.log(`Result for ${index): ${result});
};
