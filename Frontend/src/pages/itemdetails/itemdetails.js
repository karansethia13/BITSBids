// itemdetails.js
import React from 'react';
import { slides } from "../market/mydata";
import "./itemdetails.css";

import { useParams } from 'react-router-dom';

const ItemDetail = () => {
 
  return (
    <><div>
      
    
    <div className='about-itemcontainer' >
      <div className='abouttitle'>{selectedItem.title}</div>
      <img className="item-image" src={selectedItem.image} alt="item image" />
      <div className='aboutcurrentbid'>Current bid: {selectedItem.currentbid}</div>
      <div className='aboutdescription'>Description: {selectedItem.description}</div>
     
    </div>
      
    </div>
    </>
  );
}

export default ItemDetail;
