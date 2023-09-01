import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

function App() {
  const [balance, setBalance] = useState(5000);

  useEffect(() => {
    

    return () => console.log('---delete---');
  }, []);

  return (
    <>
      <Header />
      <Main balance={balance} setBalance={setBalance} />
    </>
  );
};

export default App;