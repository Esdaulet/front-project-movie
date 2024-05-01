import React, { useEffect, useState } from "react";
import "./DisplayData.css";

const DisplayData = () => {
  const [displayedData, setDisplayedData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    mobile: "",
    company: "",
    email: "",
    message: "",
  });

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

  const handleDelete = (index) => {
    const updatedData = [...displayedData];
    updatedData.splice(index, 1);
    setDisplayedData(updatedData);
    localStorage.setItem("contactData", JSON.stringify(updatedData));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedData(displayedData[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const updatedData = [...displayedData];
      updatedData[editingIndex] = editedData;
      setDisplayedData(updatedData);
      localStorage.setItem("contactData", JSON.stringify(updatedData));
      setEditingIndex(null);
      setEditedData({
        name: "",
        mobile: "",
        company: "",
        email: "",
        message: "",
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedData({
      name: "",
      mobile: "",
      company: "",
      email: "",
      message: "",
    });
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="display-data-container">
      <h2 className="request">Requests</h2>
      {displayedData.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Company</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((data, index) => (
              <tr key={index} className="editing-row ">
                <td>
                  {index === editingIndex ? (
                    <input
                      type="text"
                      name="name"
                      value={editedData.name}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    data.name
                  )}
                </td>
                <td>
                  {index === editingIndex ? (
                    <input
                      type="text"
                      name="mobile"
                      value={editedData.mobile}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    data.mobile
                  )}
                </td>
                <td>
                  {index === editingIndex ? (
                    <input
                      type="text"
                      name="company"
                      value={editedData.company}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    data.company
                  )}
                </td>
                <td>
                  {index === editingIndex ? (
                    <input
                      type="text"
                      name="email"
                      value={editedData.email}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    data.email
                  )}
                </td>
                <td>
                  {index === editingIndex ? (
                    <input
                      type="text"
                      name="message"
                      value={editedData.message}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    data.message
                  )}
                </td>
                <td>
                  {index === editingIndex ? (
                    <>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <button
                      className="edittt"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {displayedData.length === 0 && <p>No data to display.</p>}
    </div>
  );
};

export default DisplayData;
