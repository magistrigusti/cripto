import './Card.css';
import {WithRuBalance} from '../../helpers/hoc/withRuBalance'

const Card = ({balance, setBalance, ruBalance}) => {
  console.log({ruBalance});
  return (
    <div className='card'>
      <div className='card_block'> 
        <h3>Dmitrii</h3>
        <button onMouseEnter={() => console.log('enter')}
          onClick={() => setBalance((prev) => prev + 1000)}
        >Add Moneny</button>
      </div>

      <div className="card_block">
        <p>TonDeV</p>
        <p>{balance}</p>
      </div>
    </div>
  )
}

export default WithRuBalance(Card);