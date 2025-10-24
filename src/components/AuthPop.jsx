import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { CustomInput } from "./CustomInput";
import "../../styles/registration.css";
import "../../styles/popup.css";

export function AuthPop({ isOpen, onClose }) {
  const [remDevice, setRemDevice] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="registration-popup-overlay ">
      <img src="/vector-line.svg" alt="" className="registration-back-line" />
      <span className="gradient-circle"></span>
      <span className="gradient-circle"></span>
      <img src="/cros.svg" alt="" className="popup-cros" onClick={onClose} />
      <div className="registration-popup">
        <h2 className="registration-title">Авторизация</h2>
        <div className="registration-card">
          <form className="registration-form">
            <div className="form-group">
              <CustomInput placeholder={"E-mail"} id={"email"} type={"email"} />
            </div>
            <div className="form-group">
              <CustomInput
                placeholder={"Пароль"}
                id={"password"}
                type={"password"}
              />
            </div>
            <div className="form-group checkbox-group">
              <CustomCheckbox
                checked={remDevice}
                onChange={(e) => setRemDevice(e.target.checked)}
                label={"Запомнить это устройство"}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
            >
              Авторизоваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
