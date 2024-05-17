import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChooseCurrency = () => {

    const { currency, dispatch } = useContext(AppContext)
    const [newCurrency, setNewCurrency] = useState(currency)
    
    const changeCurrency = (event) => {
        const value = event.target.value
        setNewCurrency(value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return (
        <div className='alert alert-success'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text btn btn-success" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                <select
                    className="custom-select secondary"
                    id="inputGroupSelect01"
                    onChange={changeCurrency}
                >
                    <option value="£" name="pound">£ Pound</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="riyal">₹ Ruppee</option>
                </select>
            </div>
        </div>
    );
};
export default ChooseCurrency;