import { useState, useEffect } from 'react';
import './FilterBlock.css';

const FilterBlock = ({coins, setCoins}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
      const FilteredCoins = coins.filter(coin => {
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

export default FilterBlock;