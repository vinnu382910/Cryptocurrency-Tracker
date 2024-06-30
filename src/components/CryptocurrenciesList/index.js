// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  return (
    <div>
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-image"
      />
      <div className="currency-box">
        <div className="currency-cont">
          <p>Coin Type</p>
          <div className="currency-type-cont">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        {currencyList.map(eachItem => (
          <CryptocurrencyItem currencyDetails={eachItem} key={eachItem.id} />
        ))}
      </div>
    </div>
  )
}

export default CryptocurrenciesList
