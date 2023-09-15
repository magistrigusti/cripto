import { useMemo } from 'react';
import styles from './Main.module.css';
import Card from '../../components/Card/Card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from'../../components/FilterBlock/FilterBlock';

const Main = ({balance, setBalance, coins, setCoins }) => {


  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock coins={coins} setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  )
}

export default Main;