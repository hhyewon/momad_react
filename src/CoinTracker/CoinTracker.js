import {useState, useEffect} from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [USD, setUSD] = useState(0);
    const [coin, setCoin] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                setCoin(json[0].quotes.USD.price);
            });
    }, []);

    const onInputChange = (event) => {
        setUSD(event.target.value);
        setValue(event.target.value * coin);
    }

    const onSelectChange = (event) => {
        setUSD(0);
        setValue(0);
        setCoin(event.target.value);
    }

    return (
        <div>
            <h1>The Coins! {loading? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : null}
            <select onChange={onSelectChange}>
                {coins.map((item) =>
                    <option key={item.id} value={item.quotes.USD.price}>{item.name} ({item.symbol}): ${item.quotes.USD.price}</option>
                )}
            </select>
            <hr/>
            <div>
                <input
                    type="text"
                    value={USD}
                    onChange={onInputChange}
                />
                <div>{value}</div>
            </div>
        </div>
    );
}

export default CoinTracker;
