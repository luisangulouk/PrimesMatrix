import React, {useState} from 'react';
import './Primes.scss';

const PrimeMatrix = (props) => {
  const [key, setKey] = useState('');
  const [filterKey, setFilterKey] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          Matrix
        </div>
      </div>
    </div>
  );
};

export default PrimeMatrix;


