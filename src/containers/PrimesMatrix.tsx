import React, {useState, useEffect} from 'react';
import './Primes.scss';

interface Props {
  primes: any[];
}

const PrimeMatrix = (props: Props)  => {
  const [cellSize, setCellSize] = useState('--small');
  const {primes} = props;

  useEffect(() => {
    if(primes.length>11 && primes.length<=26) {
      setCellSize('--mid');
    } else if(primes.length>26) {
      setCellSize('--large');
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 matrix-container">
          {primes && primes.map(elem => {
            return (<div key={elem} className="matrix-row">{elem && elem.map(prime => {
              return (<div className={`matrix-row_cell matrix-row_cell${cellSize}`}>{prime}</div>)
            })}</div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default PrimeMatrix;


