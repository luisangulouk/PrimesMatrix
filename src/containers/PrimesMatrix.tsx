import React, {useState} from 'react';
import './Primes.scss';

interface Props {
  primes: string;
}

const PrimeMatrix = (props: Props)  => {
  const [key, setKey] = useState('');

  const {primes} = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {primes}
        </div>
      </div>
    </div>
  );
};

export default PrimeMatrix;


