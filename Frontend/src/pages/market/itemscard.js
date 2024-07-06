import React from 'react';
import "./itemscard.css";
import { Link } from "react-router-dom";
import { slides } from "./mydata";

const Itemscard = () => {
 
  
  return (
    <>
      <div className="cardGrid">
        {slides.map((item) => (
          <div key={item.id}>
            
            <Link to={`/market/${item.id}`} className="card-link">
              <div className="card">
                <div className="imgbox">
                  <img className="item-image" src={item.image} alt="item image" />
                </div>
                <div><h2 className="tittle">{item.title}</h2></div>
                <div><h3 className="currentbid">Current bid: {item.currentbid}</h3></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Itemscard;
