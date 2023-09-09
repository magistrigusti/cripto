
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
import { useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoins } from './api/api';

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

  return (
    <>
      <Header />
      <Main balance={balance} 
          setBalance={setBalance} 
          coins={coins} 
          setCoins={setFilteredCoins} 
          filteredCoins={filteredCoins}
      />
    </>
  )

}

export default App; 
*/







// Main


/* import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from'../../components/FilterBlock/FilterBlock';

const Main = ({balance, setBalance, coins, setCoins, filteredCoins}) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />

      <FilterBlock coins={coins} setCoins={setCoins} />

      {coins.length > 0 ? <CoinsList coins={filteredCoins} /> : <div>Loading....</div>}
    </main>
  )
}

export default Main; */




// Card 

/* import './Card.css';

const Card = ({balance, setBalance}) => {
  return (
    <div className="card">
      <div className='card_block'>
        <h3>Dmitrii</h3>

        <button onMouseEnter={() => console.log('---enter---')}
            onClick={() => setBalance((prev) => prev + 1000)}
        >Add Money</button>
      </div>

      <div className='card_block'>
        <p>TonDeV</p>
        <p>{balance}</p>
      </div>
    </div>
  );
};

export default Card; */



// CoinsList

/* import './CoinsList.css';

const CoinsList = ({coins}) => {
  return (
    <div className='coins-list'>
      {coins.map(coin => {
        return (
          <li className='coin-item' key={coin.uuid}>
            <div className='coin-item_info'>
              <img className='coin-item_logo' src={coin.iconUrl} alt={coin.name} />

              <p style={{color: coin.color}}>
                {coin.name}/USD
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

export default CoinsList; */



// FilterBlock 


/* import { useState, useEffect } from 'react';
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
    <div className='filter-block'>
      <input onChange={(event) => setValue(event.target.value)}
          className='input' 
          type="text" 
          placeholder='toncoin'
          value={value}
      />
    </div>
  )
}

export default FilterBlock;  */

// Header 

/* import './Header.css';

const name = 'TonDev';

const Header = () => {
  return (
    <div className='header'>{name}</div>
  );
};

export default Header; */