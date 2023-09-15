import React, { useState, useEffect, useContext } from 'react';
import './FilterBlock.css';
import { CoinsContext } from '../../context/coinsContext';

const FilterBlock = ({ coins, setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { filteredCoins } = coinsContext;

  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value);
    })
    setCoins(FilteredCoins);
  }, [value]);

  return (
    <div className='filter-Block'>
      <input onChange={(event) => setValue(event.target.value)}
        className='input'
        type='text'
        placeholder='toncoin'
        value={value}
      />
    </div>
  )
}

export default React.memo(FilterBlock);