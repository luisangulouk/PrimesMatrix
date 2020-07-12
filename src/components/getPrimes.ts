const isPrime = (subject: number) => {
  // let prime = true;
  if (subject < 2) return false;
  if (subject != Math.round(subject)) return false;

  for (let i = 2; i <= Math.sqrt(subject); i++) {
    if (subject % i == 0) return false;
  }
  return true;
};

export const getPrimes = (count: number) => {
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
  let matrix = [];
  /*
    0 i*i
    1 i*i-1 i*i
    2 i*i-2 i*i-1 i*i
  */
  for (let i = 0; i < primos.length; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      row.push(primos[j] * primos[i]);
    }
    matrix.push(row);
  }

  return matrix;
};