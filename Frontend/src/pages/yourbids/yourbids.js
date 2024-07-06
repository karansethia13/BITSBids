import React from "react";
import Navbarboot from "../../components/navbar/navbarboot.js";
import "./yourbids.css";
function YourBids() {
  const data = [
    {
      orderNumber: "1",
      productName: "Product A",
      quantity: "5",
      yourBid: "$50",
      status: "Active",
    },
    {
      orderNumber: "2",
      productName: "Product B",
      quantity: "3",
      yourBid: "$40",
      status: "Inactive",
    },
    // Add more data as needed
  ];

  return (
    <>
      <div>
        <Navbarboot />
      </div><div>
      <div>BUYING</div>
      <div>
      <table border="1" className="buying-table">
        <thead>
          <tr className="parentcolumnbuying">
            <th>Order Number</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Your Bid</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.orderNumber}</td>
              <td>{rowData.productName}</td>
              <td>{rowData.quantity}</td>
              <td>{rowData.yourBid}</td>
              <td>{rowData.status}</td>
              {/* Add action buttons or delete functionality in this column */}
              <td className="deletebutton">
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>
      <div></div>
      <div>SELLING</div>
      <div>
      <table border="1" className="selling-table">
        <thead>
          <tr className="parentcolumnselling">
            <th>Product Number</th>
            <th>Product Name</th>
            
            <th>Bid Price</th>
            <th>Timing</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.orderNumber}</td>
              <td>{rowData.productName}</td>
              
              <td>{rowData.yourBid}</td>
              <td>{rowData.status}</td>
              {/* Add action buttons or delete functionality in this column */}
              <td>
                <button className="rejectbutton">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div></div>
    </>
  );
}

export default YourBids;
