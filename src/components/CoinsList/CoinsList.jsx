
import './CoinsList.css';

const CoinsList = ({coins}) => {
  return (
    <div className='coins-list'>
      {coins.map(coin => {
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