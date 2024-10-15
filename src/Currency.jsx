import { useState, useTransition, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function Currency() {
    const [amount, setAmount] = useState(0)
    const [form, setForm] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [data, setData] = useState({});
    const [currencyKeys, setCurrencyKeys] = useState([]);

    function apiCall() {
        return fetch(`https://api.exchangerate-api.com/v4/latest/usd`)
            .then((res) => res.json())
            .then((apiData) => {
                setData(apiData);
                setCurrencyKeys(Object.keys(apiData.rates));
                return apiData;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    const swap = () => {
        setForm(to);
        setTo(form);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }


    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }

    useEffect(() => {
        apiCall();
    }, []);
    console.log(currencyKeys);
    return (
        <>
            <InputBox label="Form" amount={amount} currencyOptions={currencyKeys} onCurrencyChange={(Currency) => setAmount(currency)} selectCurrency={form} onAmountChange={(amount) => setAmount(amount)}></InputBox>
            <button onClick={swap} class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800 transform hover:scale-105 active:scale-95 transition duration-300">
                Swapz
            </button>

            <InputBox label="To" amount={amount} currencyOptions={currencyKeys} onCurrencyChange={(Currency) => setAmount(currency)} selectCurrency={form} onAmountChange={(amount) => setAmount(amount)}></InputBox> <br>
            </br>
            <button class="w-100 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800 transform hover:scale-105 active:scale-95 transition duration-300">
                convert {form} to {to} 
            </button>
        </>
    );
}
export default Currency;