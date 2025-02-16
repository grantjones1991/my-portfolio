// src/components/Footer.js
import React from "react";

function Footer() {
    return (
        <footer style={{ color: 'white',textAlign: "center", padding: "1rem", backgroundColor: "#004C54" }}>
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
