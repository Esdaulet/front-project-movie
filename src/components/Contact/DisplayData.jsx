import React, { useEffect, useState } from "react";
import "./DisplayData.css";

const DisplayData = () => {
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("contactData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (Array.isArray(parsedData)) {
        setDisplayedData(parsedData);
      } else if (typeof parsedData === "object") {
        setDisplayedData([parsedData]);
      }
    }
  }, []);

  return (
    <div className="display-data-container">
      <h2 className="request">Latest Request</h2>
      {displayedData.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Company</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((data, index) => (
              <tr key={index} className="data-item">
                <td>{data.name}</td>
                <td>{data.mobile}</td>
                <td>{data.company}</td>
                <td>{data.email}</td>
                <td>{data.message}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      )}
      {displayedData.length === 0 && <p>No data to display.</p>}
    </div>
  );
};

export default DisplayData;
