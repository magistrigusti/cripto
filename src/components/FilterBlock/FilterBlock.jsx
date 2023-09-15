import React, { useContext } from 'react';
import './FilterBlock.css';
import { CoinsContext } from '../../context/coinsContext';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const { value, setValue} = useFilterCoins(setCoins, coins);

  return (
    <div className='filter-block'>
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