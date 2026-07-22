import React, { useState } from "react";

function CurrencyConverter() {

    const [rupees, setRupees] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const euro = (parseFloat(rupees) / 80).toFixed(2);

        alert("Converting to Euro Amount is " + euro);
    };

    return (

        <div className="converter">

            <h1>Currency Convertor!!!</h1>

            <form onSubmit={handleSubmit}>

                <div className="inputGroup">

                    <label>Amount</label>

                    <input
                        type="number"
                        value={rupees}
                        onChange={(e) => setRupees(e.target.value)}
                        placeholder="Enter Rupees"
                        required
                    />

                </div>

                <div className="inputGroup">

                    <label>Currency</label>

                    <input
                        type="text"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        placeholder="Euro"
                        required
                    />

                </div>

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>

    );
}

export default CurrencyConverter;