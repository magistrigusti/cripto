
import styles from './Main.module.css';
import Card from '../../components/Card/Card';

const Main = ({balance, setBalance}) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
    </main>
  );
};

export default Main;