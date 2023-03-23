import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../currency.styles.css';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    
    return (
        <div className="alert alert-success">
        <div>
            <label
            className=""
            htmlFor="currencySelect">
                Currency
            </label>
            <select 
            id="currencySelect"
            className="box"
            onChange={event => setCurrency(event.target.value)}>
                <option defaultValue value="£"name="pound">£ Pound

                </option>
                <option value="$"name="dollar">$ Dollar

                </option>
                <option value="€"name="euro">€ Euro

                </option>
                <option value="₹"name="ruppee">₹ Ruppee

                </option>
                


        </select>
        </div>

        </div>
    );
}

export default Currency;