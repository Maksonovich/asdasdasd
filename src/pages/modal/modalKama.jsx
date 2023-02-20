import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../../utils/context";

const ModalKama = () => {
  const { changeCategory } = useContext(CustomContext);
  return (
    <section className="mdKama">
      <div className="mdKama__main">
        <Link to="/Catalog" onClick={() => changeCategory('novelties')} className="mdKama__close">Закрыть</Link>
        <div className="mdKama__body">
          <div className="mdKama__body-img"></div>
          <div className="mdKama__body-text">
            Спасибо, запись на примерку успешно<br/> оформлена!
          </div>
          <div className="mdKama__body-div"></div>
          <Link to="/Catalog" onClick={() => changeCategory('novelties')}>Продолжить покупки</Link>
        </div>
      </div>
    </section>
  );
};

export default ModalKama;
