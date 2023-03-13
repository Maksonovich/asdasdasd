import React from "react";
import instagram from "../../assets/Header/instagram.svg";
import vk from "../../assets/Header/vk.svg";
import facebook from "../../assets/Header/f.svg";
import arrowright from "../../assets/Footer/arrowrightFooter.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function f1() {
    setEmail("");
    setName("");
  }

  return (
    <>
      <footer className="Footer">
        <div className="container">
          <div className="Footer_inner">
            <div className="Footer_start">
              <div className="Footer_icon">
                <span>
                  <svg width="124" height="24" viewBox="0 0 124 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.1165 15.4774V14.8028H87.2429L83.1165 3.27613V0.283498H85.4413L93.1816 21.126L95.8516 22.566V22.8659H86.9733V22.566L89.519 21.11L87.4964 15.4778H83.1165V15.4774ZM105.909 20.8901L108.562 22.582V22.8656H102.607V22.582L105.229 20.8901V2.03943L102.607 0.583096V0.283203H107.457L120.634 18.2881V2.25877L117.98 0.567103V0.283498H124V0.567103L121.346 2.25877V22.8656L120.348 23.2832L105.909 3.58145V20.8901H105.909ZM0 22.566L2.57279 21.126V2.03974L0 0.5834V0.283498H16.1331V6.02287H15.9875L13.2691 0.958121H5.90641V10.9482H10.6802L12.5734 8.06271H12.8433V14.5889H12.5734L10.6802 11.6228H5.90641V22.1913H14.3479L17.8864 17.1106L18.0265 17.1266L17.1906 22.8659H0.000303802V22.566H0ZM83.1165 0.283498V3.27613L78.9905 14.8028H83.1165V15.4774H78.737L76.7302 21.1097H76.7466L80.0693 22.5657V22.8656H73.068V22.5657L75.8943 21.1257L82.5615 2.69776L81.0617 0.583096V0.283203H83.1165V0.283498ZM24.9601 0.283498H33.7736V0.5834L30.8665 2.03974V22.1913H38.1374L41.6759 17.1106L41.816 17.1266L40.9801 22.8659H24.9601V22.566L27.5329 21.126V2.03974L24.9601 0.5834V0.283498ZM48.6903 22.566L51.2631 21.126V2.03974L48.6903 0.5834V0.283498H64.8234V6.02287H64.6778L61.9594 0.958121H54.5967V10.9482H59.3702L61.2636 8.06271H61.5336V14.5889H61.2636L59.3702 11.6228H54.5967V22.1913H63.0382L66.5767 17.1106L66.7171 17.1266L65.8809 22.8659H48.6903V22.566Z" fill="#222222" />
                  </svg>
                </span>
              </div>
              <div className="FooterAppContact">
                <p>ТЕЛ.: 8 (495) 150-14-77</p>
                <p>WHATSAPP: +7 (977) 728-27-38</p>
              </div>
              <div className="FooterEmail">
                <p>EMAIL: info@eleanboutique.ru</p>
              </div>
            </div>
            <div className="Footer_Middle">
              <div className="Footer_nav">
                <ul>
                  <li>
                    <Link to="deliver">
                      {" "}
                      <a href="">ДОСТАВКА</a>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/pay">
                      {" "}
                      <a href="">ОПЛАТА</a>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/voz">
                      {" "}
                      <a href="">ВОЗВРАТ</a>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <a href="">РАЗМЕРНАЯ</a>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="Primerka">
                      {" "}
                      <a href="">ПРИМЕРКА</a>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="Contact">
                      {" "}
                      <a href="">КОНТАКТЫ</a>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="Footer_Information">
                <div className="FooterAdress">
                  <p>АДРЕС: </p>
                  <p>г. Москва, Новая площадь 8, стр.2, 5 этаж</p>
                </div>
                <div className="Footer_Time_Working">
                  <p>РЕЖИМ РАБОТЫ: </p>
                  <p>с 9.00 до 21.00 шоурум: с 12.00 до 21.00</p>
                </div>
              </div>
              <div className="FooterApps">
                <img src={instagram} alt="figma" />
                <img className="FOoter_icon_apps" src={vk} alt="figma" />
                <img className="FOoter_icon_apps" src={facebook} alt="figma" />
              </div>
            </div>
            <div className="Footer_End">
              <form action="/Thanks">
                <div className="Footer_Subscribing">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="Footer_input"
                    placeholder="Имя"
                    required
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="Footer_input2"
                    placeholder="E-MAIL"
                    required
                  />
                  <div className="Footer_Agreement">
                    <input className="Footer_checkbox" type="checkbox" required />
                    <a>Я согласен </a>
                    <p>c политикой конфиденциальности</p>
                  </div>
                  <button
                    type="submit"
                    className="Footer_Subscribe_button"
                  >
                    <p>ПОДПИСАТЬСЯ</p>
                    <img src={arrowright} alt="" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
