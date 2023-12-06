import React, { useState } from 'react';

function AiExample() {
    const [numbers, setNumbers]=React.useState([]);
    const [result, setResult]=React.useState('');

    function handleNumberInput(e){
        const getInputVal = e.target.value;
        setNumbers([...numbers, Number(getInputVal)])
    };
    function handleOperation(operation){
        let operationResult;

        switch(operation){
            case '+':
                operationResult = numbers.reduce((acc, curr)=>acc+curr,0);
                break;
                default:
                return;
        }
        setResult(operationResult);
        setNumbers([])
    }
    return ( 
        <div>
            <input type="number" name="number" id="number" onChange={handleNumberInput} />
            <button value='+' onClick={handleOperation}>+</button>
        </div>
     );
}

export default AiExample;