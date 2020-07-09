import React, {useState} from 'react';
import PrimeMatrix from './PrimesMatrix';
import {getPrimes} from '../components/getPrimes';
import './Primes.scss';

const Primes = () => {
  const [key, setKey] = useState(null);
  const [filterKey, setFilterKey] = useState(null);

  const listPrimes = () => {
    if(!key){
      return;
    }
    const primes = getPrimes(key);
    setFilterKey(primes);
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
                placeholder="Search by user"
                className="form-control"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setFilterKey(key)}
                >Get Primes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {filterKey && <PrimeMatrix primes={filterKey} />}
    </div>
  );
};

export default Primes;
