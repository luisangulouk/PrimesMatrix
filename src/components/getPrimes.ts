export const isPrime = (subject: number) => {
  if (!subject) return false;
  if (subject < 2) return false;
  if (subject != Math.round(subject)) return false;

  for (let i = 2; i <= Math.sqrt(subject); i++) {
    if (subject % i == 0) return false;
  }
  return true;
};

export const getPrimes = (count: number) => {
  if(!count) return [];
  const primes = [];
  let i = 2;

  while (primes.length < count) {
    if (isPrime(i)) {
      primes.push(i);
    }
    if (i % 2 == 0) {
      i++;
    } else {
      i += 2;
    }
  }
  return primes;
}

export const drawMatrix = (primos: number[]) => {
  if(!primos) return [];
  let matrix = [];
  /*
    0 i*i
    1 i*i-1 i*i
    2 i*i-2 i*i-1 i*i
  */
  for (let i = 0; i < primos.length; i++) {
    let row = [];
    row.push({class: 'header', value: primos[i]});
    for (let j = 0; j <= i; j++) {
      const pxp = {class: 'cell', value: primos[j] * primos[i]};
      row.push(pxp);
      if(j!==i) {
        matrix[j].push(pxp)
      }
    }
    matrix.push(row);
  }

  primos.unshift(null);
  matrix.unshift(primos.map(elem => {
    return {
      class: 'header',
      value: elem
    }
  }));

  return matrix;
};