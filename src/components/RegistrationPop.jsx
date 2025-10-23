import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { CustomInput } from "./CustomInput";
import "../../styles/registration.css";
import "../../styles/popup.css";

export function RegistrationPop() {
  const [subPolice, setSubPolice] = useState(false);
  const [subSend, setSubSend] = useState(false);

  return (
    <div className="registration-popup-overlay">
      <div className="registration-popup">
        <h2 className="registration-title">Зарегистрироваться</h2>
        <div className="registration-card">
          <form className="registration-form">
            <div className="form-group">
              <CustomInput placeholder={"Имя"} id={"name"} type={"text"} />
            </div>
            <div className="form-group">
              <CustomInput
                placeholder={"Фамилия"}
                id={"surname"}
                type={"text"}
              />
            </div>
            <div className="form-group">
              <CustomInput placeholder={"E-mail"} id={"email"} type={"email"} />
            </div>
            <div className="form-group">
              <CustomInput
                placeholder={"Номер телефона"}
                id={"phone"}
                type={"tel"}
              />
            </div>
            <div className="form-group checkbox-group">
              <CustomCheckbox
                checked={subPolice}
                onChange={(e) => setSubPolice(e.target.checked)}
                label={"Согласен с политикой конфедецальнсти"}
              />
              <CustomCheckbox
                checked={subSend}
                onChange={(e) => setSubSend(e.target.checked)}
                label={"Получать полезную рассылку"}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
