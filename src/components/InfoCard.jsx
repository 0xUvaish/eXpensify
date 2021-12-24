import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
           Try saying: <br />
           Add {isIncome ? 'Income ' : 'Expense ' } 
           for {isIncome ? '₹8000 ' : '₹3000 ' } 
           in Category {isIncome ? 'Business ' : 'House ' } 
           for {isIncome ? 'Monday ' : 'Friday ' } 
        </div>
    )
}

export default InfoCard;
