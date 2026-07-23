import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>

            <div className="buttonArea">

                {isLoggedIn ? (

                    <button
                        className="logoutBtn"
                        onClick={() => setIsLoggedIn(false)}
                    >
                        Logout
                    </button>

                ) : (

                    <button
                        className="loginBtn"
                        onClick={() => setIsLoggedIn(true)}
                    >
                        Login
                    </button>

                )}

            </div>

            {isLoggedIn ? <UserPage /> : <GuestPage />}

        </div>
    );
}

export default LoginControl;