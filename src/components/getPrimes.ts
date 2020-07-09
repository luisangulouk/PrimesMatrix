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