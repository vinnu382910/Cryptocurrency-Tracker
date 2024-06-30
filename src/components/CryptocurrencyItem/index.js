// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="currency-cont2">
      <div className="currency-name-cont">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-type-cont">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
