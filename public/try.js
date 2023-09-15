
// API 

/* import axios from 'axios';

const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;

export const getCoins = async () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': key,
    },
  };

  try {
    const response = await axios.get(url + '/coins', options);

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
} */




// App

/* 

import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoins } from './api/api';
import { CoinsContext } from './context/coinsContext';

function App() {
  const [balance, setBalance] = useState(5000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    }
    fetchData();
  }, []);

  const addBalance = useCallback(() => {
    setBalance(prev => prev + 1000)
  }, []);

  return (
    <>
      <CoinsContext.Provider value={{coins, filteredCoins}} >
        <Header />
        <Main balance={balance}
            setBalance={addBalance}
            coins={coins}
            setCoins={setFilteredCoins}
            filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  )
}

export default App;

*/







// Main


/* 

import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from'../../components/FilterBlock/FilterBlock';

const Main = ({balance, setBalance, coins, setCoins }) => {


  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  )
}

export default Main;

*/




// Card 

/* 
import './Card.css';
import { WithRuBalance } from '../../helpers/hoc/withRuBalance'

const Card = ({balance, setBalance, ruBalance}) => {

  return (
    <div className='card'>
      <div className='card_block'> 
        <h3>Dmitrii</h3>
        <button onMouseEnter={() => console.log('enter')}
          onClick={setBalance}
        >Add Moneny</button>
      </div>

      <div className="card_block">
        <p>TonDeV</p>
        <p>{balance} $</p>
      </div>
    </div>
  )
}

export default WithRuBalance(Card);
*/



// CoinsList

/* 

import { useContext } from 'react';
import './CoinsList.css';
import { CoinsContext } from '../../context/coinsContext';

const CoinsList = () => {
  const coinsContext = useContext(CoinsContext);
  const { filteredCoins } = coinsContext; 

  return (
    <div className='coins-list'>
      {filteredCoins.map(coin => {
        return (
          <li className='coin-item' key={coin.uuid}>
            <div className='coin-item_info'>
              <img className='coin-item_logo' 
                src={coin.iconUrl}
                alt={coin.name}
              />
              
              <p style={{color: coin.color}}>
                {coin.name}
              </p>
            </div>

            <div className='coin-item_price'>
              <p style={{color: coin.color}}>
                {(+coin.price).toFixed(2)} USD
              </p>

              <p style={{color: coin.color}}>
                {(+coin.btcPrice).toFixed(6)} BTC
              </p>
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default CoinsList;

*/




// FilterBlock 

/* 
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
*/



// useFilterCoins 

/* 
import { useState, useEffect } from 'react';

export const useFilterCoins = (setCoins, coins) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value);
    })
    setCoins(filteredCoins);
  }, [value]);

  return {value, setValue};
}
*/



// Header 

/* import './Header.css';

const name = 'TonDev';

const Header = () => {
  return (
    <div className='header'>{name}</div>
  );
};

export default Header; */



// WithRuBalance

/* export const WithRuBalance = (Component) => {
  return props => {
    const {balance} = props;
    const ruBalance = balance * 90;
    return <Component {...props} ruBalance={ruBalance} />
  }
} */