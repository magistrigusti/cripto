// App

/* import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoins } from './api/api';

function App() {
  const [balance, setBalance] = useState(5000);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
    }
    fetchData();
  }, []);

  console.log(coins);

  return (
    <>
      <Header />
      <Main coins={coins} balance={balance} setBalance={setBalance} />
    </>
  );
}

export default App;
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



// Main

/* import styles from './Main.module.css';
import Card from '../../components/Card/Card';


const Main = ({balance, setBalance}) => {

  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
    </main>
  );
};

export default Main; */




// Card 

/* import './Card.css';

const Card = ({balance, setBalance}) => {
  return (
    <div className='card'>
      <div className='card_block'>
        <p>TonDeV</p>

        <button onClick={() => setBalance((prev) => prev + 1000)}
        >
          Add money
        </button>
      </div>

      <div className='card_block'>
        <p>Dmitrii</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default Card; */




/* 
// API 

import axios from 'axios';

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