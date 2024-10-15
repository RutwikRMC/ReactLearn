function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false
}) {
    return (
        <>
            <div className="bg-dark-subtle p-4 rounded-4">
                <div className="d-flex w-100">
                    <div className="w-50">
                        <label className="mb-2">{label}</label>
                        <div>
                            <input
                                type="number"
                                placeholder="Amount"
                                disabled={amountDisabled}
                                value={amount}
                                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="w-50 ms-5">
                        <label className="mb-2">Currency Typee</label>
                        <div>
                            <select
                                value={selectCurrency}
                                disabled={currencyDisabled}
                                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            >
                                {currencyOptions.map((curr) => (
                                    <option key={curr} value={curr}>
                                        {curr}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InputBox;
