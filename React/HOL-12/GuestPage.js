import React from "react";

function GuestPage() {
    return (
        <div className="guest">

            <h2>✈️ Welcome Guest</h2>

            <p>You can browse the available flights.</p>

            <table>
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI-202</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                        <td>₹5,500</td>
                    </tr>

                    <tr>
                        <td>6E-431</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>₹4,800</td>
                    </tr>

                    <tr>
                        <td>UK-811</td>
                        <td>Bangalore</td>
                        <td>Kolkata</td>
                        <td>₹6,200</td>
                    </tr>
                </tbody>
            </table>

            <p className="note">
                Login to book your tickets.
            </p>

        </div>
    );
}

export default GuestPage;