import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import '../components/index.css';
import data from '../assets/data/data.json';
import { Select } from 'antd';
const { Option } = Select;

const Valyuta = () => {
  const [opt, setOpt] = useState([]);
  const [value, setValue] = useState('');
  const [verify, setVerify] = useState('');
  const amountRef = useRef(null);

  useEffect(() => {
    setOpt(data);
  }, []);

  function onplus() {
    const selectedCurrency = opt.find(currency => {
      return currency.currencies && Object.keys(currency.currencies)[0] === value;
    });

    if (selectedCurrency) {
      const rateToUSD = parseFloat(Object.values(selectedCurrency.currencies)[0].rateToUSD);
      const amount = parseFloat(amountRef.current.value);
      if (!isNaN(amount)) {
        const calculatedAmount = (amount * rateToUSD).toFixed(1);
        setVerify(`$${calculatedAmount} USD`);
      } else {
        setVerify('Iltimos, togri miqdorni kiriting.');
      }
    } else {
      setVerify('Iltimos, valyutani tanlang.');
    }
  }

  return (
    <div>
      <Header />
      <div className="conta">
        <div className="valyutniy">
          <div className="valone">
            <ul>
              <li>Convert</li>
              <li>Send</li>
              <li>Charts</li>
              <li>Alerts</li>
            </ul>
            <div className="valtwo">
              <form>
                <div className="fone">
                  <label>Amount</label> <br />
                  <input 
                    type="text" 
                    ref={amountRef} 
                  />
                </div>
                <div className="ftwo">
                  <label>From</label> <br />
                  <Select 
                    className='slt'
                    showSearch
                    placeholder={value || 'Valyutani tanlang'}
                    optionFilterProp="children"
                    onChange={(value) => setValue(value)} 
                    filterOption={(input, option) =>
                      option.children.toLowerCase().includes(input.toLowerCase())
                    }
                  >
                    {opt.map((currency, index) => {
                      return currency.currencies && (
                        <Option
                          key={currency.id || index} 
                          value={Object.keys(currency.currencies)[0]} 
                        >
                          <div className="contry-wr">
                            <img className='immg' src={currency.flag} alt="" />
                            <h4>{Object.keys(currency.currencies)[0]}-</h4>
                            <h4>{Object.values(currency.currencies)[0].name}</h4>

                          </div>
                        </Option>
                      );
                    })}
                  </Select>
                </div>
                  <div className="fthree">
                    <label>To</label> <br />
                    <p>USD - US Dollars</p>
                  </div>
              </form>
              <h1>{verify}</h1>
            </div>
            <button className='bit' onClick={onplus}>View transfer quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valyuta;
