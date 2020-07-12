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
          {primes && primes.map((elem, index) => {
            return (<div key={`row${index}`} className="matrix-row">{elem && elem.map(prime => {
              return (
              <div key={prime.value} 
                className={`matrix-row_cell matrix-row_cell${cellSize} matrix-row_cell-${prime.class}`}
                >{prime.value}
              </div>)
            })}</div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default PrimeMatrix;


