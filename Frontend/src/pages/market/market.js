import React from "react";
import "./markets.css"; // Import your CSS file for MarketPage
import Navbar from "../../components/navbar/navbar.js";
import Itemscard from "./itemscard.js";
import Navbarboot from "../../components//navbar/navbarboot.js";

function MarketPage() {
return(
    <>
    <div>
        <Navbarboot />
    </div>
    <div>
        <Itemscard />
    </div>
    </>
);
}

export default MarketPage;
