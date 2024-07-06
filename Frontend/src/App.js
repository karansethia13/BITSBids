import  React from "react";
import Homepage from './pages/homepage/homepage';
import './App.css';
import MarketPage from "./pages/market/market.js";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import YourBids from "./pages/yourbids/yourbids";
import Chat from "./pages/chat/chat";
import { slides } from "./pages/market/mydata";
import ItemDetail from "./pages/itemdetails/itemdetails";
import PROFILE from "../src/pages/profile/profile";
import EnlistmentPage from "./pages/Enlistpage/Enlist";
import SigninPage from "./pages/signin/signin";

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" exact element={<Homepage />} />
<Route path="/market" element={<MarketPage />} />
<Route path="/yourbids" element={<YourBids />} />
<Route path="/chat" element={<Chat />} />
<Route path="/profile" element={<PROFILE />} />
<Route path="/enlist" element={<EnlistmentPage />} />
<Route path="/signin" element={<SigninPage />} />
{slides.map((item) => (
    <Route
      key={item.id} // Remember to add a unique key for each route
      path={`/market/${item.id}`} // Dynamic route based on item id
      element={<ItemDetail item={item} />} // Pass the item data to ItemDetail
    />
  ))}
    </Routes>

    
  </Router>
  );
}

export default App;