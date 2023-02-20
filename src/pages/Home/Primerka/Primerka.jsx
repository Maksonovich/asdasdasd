import React from "react";
import PrimerkaIcon from "../../../assets/Primerka/Primerka.svg";
import { useState } from "react";

const Primerka = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");
  function f2() {
    setName("");
    setPhone("");
    setTime("");
    setComment("");
  }
  return (
    <section className="Primerka">
      <div className="container">
        <div className="Primerka_inner">
          <form action="/djkama">
            <div className="PrimerkaIcon">
              <img src={PrimerkaIcon} alt="" />
            </div>
            <h1>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h1>
            <div className="Primerka_input_row1">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="Primerka_input"
                type="text"
                placeholder=" ВВЕДИТЕ ИМЯ"
                required
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="Primerka_input1"
                type="text"
                placeholder="ВВЕДИТЕ ТЕЛЕФОН"
                required
              />
              <input
                onChange={(e) => setTime(e.target.value)}
                value={time}
                className="Primerka_input2"
                type="text"
                placeholder="ВВЕДИТЕ УДОБНОЕ ВРЕМЯ"
                required
              />
            </div>
            <div className="Primerka_input_row2">
              <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                className="Primerka_input_coment"
                type="text"
                placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
              />

              <button onChange={f2} className="Primerka_button" type="submit">
                {" "}
                ОТПРАВИТЬ{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Primerka;
