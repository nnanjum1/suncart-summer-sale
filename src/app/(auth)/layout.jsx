import React from "react";
import NavBar from "../component/shared/NavBar";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default AuthLayout;