// src/components/Footer.js
import React from "react";

function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#f4f4f4" }}>
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
