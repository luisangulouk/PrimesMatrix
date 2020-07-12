import React, {useState} from 'react';
import './Primes.scss';

interface Props {
  primes: any[];
}

const PrimeMatrix = (props: Props)  => {
  const [key, setKey] = useState('');

  const {primes} = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {primes && primes.map(elem => {
            return (<div key={elem}>{elem && elem.map(prime => {
              return (<div>{prime}</div>)
            })}</div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default PrimeMatrix;


