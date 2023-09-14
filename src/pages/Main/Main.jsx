import { useMemo } from 'react';
import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from'../../components/FilterBlock/FilterBlock';

const Main = ({balance, setBalance, coins, setCoins, filteredCoins}) => {
  const filterExpensiveCoins = () => {
    console.log('---func work');
    return filteredCoins.filter((coin) => coin.price > 1000);
  }
  const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);

  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock coins={coins} setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList coins={expensiveCoins} /> : <div>Loading...</div>}
    </main>
  )
}

export default Main;