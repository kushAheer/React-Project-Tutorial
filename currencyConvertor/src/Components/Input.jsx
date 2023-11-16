import { useId } from "react";

function Input({
    label,
    className = "",
    amount, 
    onAmountChange ,
    onCurrencyChange ,
    currencyOptions=[],
    selectCurrency ='usd',
    amountDisable = false ,
    currencyDisable = false}) {

    
    const amountInputId =useId();
    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input id={amountInputId}
                        value={amount}
                        onChange={(event)=> onAmountChange && onAmountChange((event.target.value))}
                        className="outline-none w-full bg-transparent py-1.5"
                        type="number"
                        placeholder={amountDisable}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} 
                    onChange={(event)=> onCurrencyChange && onCurrencyChange(event.target.value)} disabled={currencyDisable} >

                        
                        {currencyOptions.map((currencyName)=>(
                            <option key={currencyName} value={currencyName}> {currencyName} </option>    
                        ))}

                    </select>
                </div>
            </div>
        </>);
}

export default Input;

