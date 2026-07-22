import React from "react";
import "./App.css";
import office from "./office.jpg";

function App() {

    const heading = "Office Space";

    const officeList = [
        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },
        {
            Name: "Infosys",
            Rent: 75000,
            Address: "Hyderabad"
        },
        {
            Name: "TCS",
            Rent: 45000,
            Address: "Bangalore"
        },
        {
            Name: "Google",
            Rent: 120000,
            Address: "Hyderabad"
        },
        {
            Name: "Microsoft",
            Rent: 95000,
            Address: "Bengaluru"
        },
        {
            Name: "Amazon",
            Rent: 70000,
            Address: "Pune"
        }
    ];

    return (
        <div className="App">

            <h1>🏢 {heading}, at Affordable Range</h1>

            <img
                src={office}
                alt="Office Space"
                className="officeImage"
            />

            <div className="officeContainer">

                {officeList.map((item, index) => (

                    <div className="card" key={index}>

                        <h2>🏬 {item.Name}</h2>

                        <h3 className={item.Rent <= 60000 ? "red" : "green"}>
                            💰 Rent : ₹ {item.Rent.toLocaleString()}
                        </h3>

                        <h3 className="address">
                            📍 {item.Address}
                        </h3>

                        <button className="viewBtn">
                            View Details
                        </button>

                    </div>

                ))}

            </div>

            <div className="footer">
                ⭐ Premium Office Space Rental Portal ⭐
                <br />
                Find Your Perfect Workspace Today
            </div>

        </div>
    );
}

export default App;