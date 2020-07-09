import React, {useState} from 'react';
import PrimeMatrix from './PrimesMatrix';
import './Primes.scss';

const Primes = () => {
  const [key, setKey] = useState('');
  const [filterKey, setFilterKey] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="">
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
