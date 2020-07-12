import React, {useState} from 'react';
import PrimeMatrix from './PrimesMatrix';
import {getPrimes, drawMatrix} from '../components/getPrimes';
import './Primes.scss';

const Primes = () => {
  const [key, setKey] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [primeList, setPrimeList] = useState([]);

  const HandleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setKey(e.currentTarget.value);
    setIsDisabled(!e.currentTarget.validity.valid);
  }

  const listPrimes = () => {
    const _key = parseInt(key);
    if(!_key || typeof _key != 'number'){
      return;
    }
    const primes = getPrimes(_key);
    setPrimeList(drawMatrix(primes));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="primes-container">
            <div className="input-group mb-3">
              <input
                type="text"
                name="filter"
                placeholder="Number of primes"
                className="form-control"
                pattern="^-?[0-9]\d*\.?\d*$"
                value={key}
                onChange={HandleInput}
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={isDisabled}
                  onClick={() => listPrimes()}
                >Get Primes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {primeList && <PrimeMatrix primes={primeList} />}
    </div>
  );
};

export default Primes;
