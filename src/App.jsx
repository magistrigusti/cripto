import { useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoins } from './api/api';

function App() {
  const [balance, setBalance] = useState(50000);
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