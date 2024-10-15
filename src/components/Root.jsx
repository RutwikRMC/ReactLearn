import React from 'react';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
function Root(){
    const data  = useCurrencyInfo("usd");
    console.log(" hooks Data", data);
    return(
    <div>
        <h1 className="bg-orange-500">Currect App </h1>
    </div>

    );
}

export default Root;