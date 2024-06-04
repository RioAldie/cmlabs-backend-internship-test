const fizzbuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i !== 0) {
      if (i % 5 === 0) {
        console.log(i, 'fizzbuzz');
      }
      if (i % 5 !== 0) {
        console.log(i, 'fizz');
      }
    } else if (i % 5 === 0 && i !== 0 && i % 3 !== 0) {
      console.log(i, 'buzz');
    }
  }
};

fizzbuzz();
