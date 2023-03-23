import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../item.styles.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const decreaseAllocation = name => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type:'RED_EXPENSE',
            payload: expense
        });
    }

    const increaseAllocation = name => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }



    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency + props.cost}</td>
    <td><button style={{ backgroundColor: 'green', color: 'white', borderRadius: '50%', border: 'none', fontSize: '1.5rem', display: 'flex', justifyContent: 'center'}} onClick={event=> increaseAllocation(props.name)}><TiPlus size='1.2em'></TiPlus></button></td>
        <td><button style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', border: 'none', fontSize: '1.5rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}} onClick={event=> decreaseAllocation(props.name)}><TiMinus size='1.2em' style={{ margin: 'auto' }}></TiMinus></button></td>
        <td><button style={{ fontSize: '1.5em', backgroundColor: 'none', border: 'none'}}>
            <b><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></b></button></td>
        </tr>
    );
};

export default ExpenseItem;
