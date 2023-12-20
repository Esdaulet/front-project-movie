import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> - обязательное поле.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Неверный адрес электронной почты.";
      } else if (field === "mobile") {
        if (!isValidMobile(value)) return "Неверный номер мобильного телефона.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedData = {
      ...contactData,
      [name]: name === "mobile" ? value.replace(/\D/, "") : value,
    };

    setContactData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contactData.name === "" ||
      contactData.name === undefined ||
      contactData.mobile === "" ||
      contactData.mobile === undefined ||
      contactData.email === "" ||
      contactData.email === undefined ||
      contactData.company === "" ||
      contactData.company === undefined ||
      contactData.message === "" ||
      contactData.message === undefined
    ) {
      setSuccessMsg(false);
    } else {
      setSuccessMsg(true);
      localStorage.setItem("contactData", JSON.stringify(contactData));
      navigate("/displaydata");
    }
  };

  return (
    <div className="bodymassazh">
      <h1 className="contact_h1">
        Оставляете заявку если хотите получать уведомление о новых фильмах и
        сериалов
      </h1>
      <div id="contact">
        <div className="form">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            {!successMsg ? (
              <>
                <div id="errormessage" className={errorMsg ? "show" : ""}>
                  {errorMsg}
                </div>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Имя"
                    value={contactData.name || ""}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="mobile"
                    type="text"
                    maxLength={10}
                    className="form-control"
                    placeholder="Мобильный телефон"
                    onBlur={handleBlur}
                    value={contactData.mobile || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="company"
                    type="text"
                    className="form-control"
                    placeholder="Компания"
                    value={contactData.company || ""}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Электронная почта"
                    value={contactData.email || ""}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    type="text"
                    className="form-control"
                    placeholder="Сообщение"
                    value={contactData.message || ""}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                    rows="3"
                  />
                </div>
                <p className="text-right mb-0">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Отправить сейчас"
                  />
                </p>
              </>
            ) : (
              <div className="show" id="sendmessage">
                Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
