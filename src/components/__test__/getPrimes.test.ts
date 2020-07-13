import {isPrime, getPrimes, drawMatrix} from '../getPrimes';


describe('Logic of Primes and Primes Matrix', () => {
  it('Should return false if no subject is passed', () => {

    expect(isPrime(null)).toEqual(false)
  });

  it('Should return false if subject is less than 2', () => {

    expect(isPrime(1)).toEqual(false)
  });

  it('Should return false if subject is a float number', () => {

    expect(isPrime(5.5)).toEqual(false)
  });

  it('Should return true if subject is prime', () => {

    expect(isPrime(3)).toEqual(true)
  });

  it('Should return an empty array if no argument is passed', () => {

    expect(getPrimes(null)).toEqual([])
  });

  it('Should return an n-length array if n is passed', () => {

    expect(getPrimes(2).length).toEqual(2)
  });

  it('Should return an empty array if no argument is passed', () => {

    expect(drawMatrix(null)).toEqual([])
  });
})