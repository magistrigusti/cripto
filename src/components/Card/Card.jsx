import './Card.css';

const Card = ({balance, setBalance}) => {
  return (
    <div className='card'>
      <div className='card_block'>
        <p>TonDeV</p>
        <button onClick={() => setBalance(prev => balance + 1000)}>Add money</button>
      </div>

      <div className='card_block'>
        <p>Dmitrii</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default Card;