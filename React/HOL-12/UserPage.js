import React from "react";

function UserPage() {
    return (
        <div className="user">

            <h2>🎉 Welcome User</h2>

            <p>You are successfully logged in.</p>

            <table>
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Route</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI-202</td>
                        <td>Hyderabad ➜ Delhi</td>
                        <td>₹5,500</td>
                        <td>Available</td>
                    </tr>

                    <tr>
                        <td>6E-431</td>
                        <td>Chennai ➜ Mumbai</td>
                        <td>₹4,800</td>
                        <td>Available</td>
                    </tr>

                    <tr>
                        <td>UK-811</td>
                        <td>Bangalore ➜ Kolkata</td>
                        <td>₹6,200</td>
                        <td>Available</td>
                    </tr>
                </tbody>
            </table>

            <button className="bookBtn">
                Book Ticket
            </button>

        </div>
    );
}

export default UserPage;