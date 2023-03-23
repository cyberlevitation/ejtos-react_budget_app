import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  // const [action, setAction] = useState("");
  const { budget, dispatch, currency } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>
        Budget:{' ' + currency}
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          onChange={event =>
            dispatch({
              type: 'SET_BUDGET',
              payload: event.target.value,
            })
          }
          style={{ size: 5 }}
          step={10}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
