import React, { useState } from "react";
import { useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import store from "../../redux";
import MakingAnItems from "./decorationItem/decorationItem";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  coupon: Yup.string()
    .required(
      "Купон недействителен, просрочен или закончился лимит его использования!"
    )
    .min(6, "Это слишком короткий купон"),
});

const Decoration = () => {
  const task = useSelector((store) => store.task.task);
  const totalPrice = useSelector((store) =>
    store.task.task.reduce((acc, item) => acc + item.price, 0)
  );

  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(validationOpt);
  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  const [arrow, SetArrow] = useState(false);
  const [list, SetList] = useState(false);
  const [active, setActive] = useState(false);

  function eeeee() {
      setActive(active === false)
  }
  function bbbbb(e) {
      setActive(active = true)
  }

  return (
    <section className="Making">
      <div className="container">
        <h2 className="Making__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
        <div className="Making__items">
          <form>
            {task.length !== 0 ? (
              task.map((item) => <MakingAnItems item={item} />)
            ) : (
              <div className="favorites__empty">Пусто добавьте вещей</div>
            )}
          </form>
        </div>
        {task.length !== 0 && (
          <div className="Making__info">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="Making__info-form">
                <input
                  name="coupon"
                  type="text"
                  placeholder="Введите промо код (если имеется)"
                  {...register("coupon")}
                />
                <div className="Making__info-form_error">
                  {errors.coupon?.message}
                </div>
                <button type="submit">Применить</button>
              </div>
            </form>
            <div className="Making__info-stock">
              Скидка
              <span>0%</span>
            </div>
            <div className="Making__info-price">
              ИТОГОВАЯ СТОИМОСТЬ:
              <span>{totalPrice}</span>
            </div>
          </div>
        )}
        {task.length !== 0 && (
          <div className="Making__blocks">
            <div className="Making__blocks-left">
              <div className="Making__blocks-left_title">
                ВЫБЕРИТЕ СПОСОБ ДОСТАВКИ
              </div>
              <div className="Making__blocks-left_check">
                <div className="Making__blocks-left_check-form">
                  <label>
                    <input type="radio" name="deliver" onChange={eeeee}/>
                    <b></b>
                    <span>Шоурум</span>
                  </label>
                  <label>
                    <input type="radio" name="deliver"  onChange={eeeee}/>
                    <b></b>
                    <span>Курьером по Москве</span>
                  </label>
                  <label>
                    <input type="radio" name="deliver" onChange={bbbbb}/>
                    <b></b>
                    <span>Курьером по России</span>
                  </label>
                  <label>
                    <input type="radio" name="deliver" onChange={bbbbb}/>
                    <b></b>
                    <span>Курьером за границу</span>
                  </label>
                </div>
              </div>
              {active && (
                <div className="Making__blocks-left_select">
                  <div className="Making__blocks-left_select-inner">
                    <div className="Making__blocks-left_select-top">
                      <input
                        placeholder="Выберите дату"
                        type="text"
                        onClick={() => SetArrow(!arrow)}
                      />
                      <div
                        style={{ rotate: `${arrow ? "180deg" : "0deg"}` }}
                      ></div>
                    </div>
                    <div
                      className={`Making__blocks-left_select-bottom ${
                        arrow ? "actives" : ""
                      }`}
                    >
                      <div className="Making__blocks-left_select-bottom_item">
                        <input type="hidden" />
                        Сегодня, 29 февраля
                      </div>
                      <div className="Making__blocks-left_select-bottom_item">
                        <input type="hidden" />
                        Завтра, 30 февраля
                      </div>
                      <div className="Making__blocks-left_select-bottom_item">
                        <input type="hidden" />
                        среда, 15 февраля
                      </div>
                    </div>
                  </div>
                  <div className="Making__blocks-left_select-inner">
                    <div className="Making__blocks-left_select-top">
                      <input type="text" onClick={() => SetList(!list)} />
                      <div
                        style={{ rotate: `${list ? "180deg" : "0deg"}` }}
                      ></div>
                    </div>
                    <div
                      className={`Making__blocks-left_select-bottom ${
                        list ? "actives" : ""
                      }`}
                    >
                      <div className="Making__blocks-left_select-bottom_item">
                        <input type="hidden" />С 12 до 15 часов
                      </div>
                      <div className="Making__blocks-left_select-bottom_item">
                        <input type="hidden" />С 16 до 19 часов
                      </div>
                      <div className="Making__blocks-left_select-bottom_item">
                        <input type="hidden" />С 7 до 16 часов
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="Making__blocks-left_inputs">
                <div className="Making__blocks-left_inputs-title">Основная информация</div>
                <div className="Making__blocks-left_inputs-item">
                  <input type="text" placeholder="Введите фио"/>
                </div>
                <div className="Making__blocks-left_inputs-item">
                  <input type="number" placeholder="Введите телефон"/>
                </div>
                <div className="Making__blocks-left_inputs-item">
                  <input type="email" placeholder="Введите e-mail"/>
                </div>
                <div className="Making__blocks-left_inputs-textarea">
                  <textarea name="" id="" cols="30" rows="10" placeholder="Добавить коментарии"></textarea>
                </div>
              </div>
              <div className="Making__blocks-left_bold">Выберите способ оплаты</div>
              <div className="Making__blocks-left_radios">
                <label className="Making__blocks-left_radios-item">
                  <input type="radio" name="radiosa" />
                  <b></b>
                  <span>Оплата картой</span>
                </label>
                <label className="Making__blocks-left_radios-item">
                  <input type="radio" name="radiosa" />
                  <b></b>
                  <span>Оплата при получении</span>
                </label>
                <label className="Making__blocks-left_radios-item">
                  <input type="radio" name="radiosa" />
                  <b></b>
                  <span>Купить в рассрочку</span>
                </label>
              </div>
              <div className="Making__blocks-left_custom">
                <div className="Making__blocks-left_custom-price">
                  <div>Предварительная стоимость:</div>
                  <div>{totalPrice - 1500} ₽</div>
                </div>
                <div className="Making__blocks-left_custom-price">
                  <div>Курьером за границу:</div>
                  <div>{totalPrice / 5} ₽</div>
                </div>
                <div className="Making__blocks-left_custom-price">
                  <div>Итого:</div>
                  <div>{totalPrice} ₽</div>
                </div>
              </div>
              <label className="Making__blocks-left_label">
                <input type="checkbox" />
                <b></b>
                <span>Я принимаю <a>договор публичной оферты</a></span>
              </label>
              <button className="Making__blocks-left_btn" type="submit">Оформить заказ</button>
            </div>
            <div className="Making__blocks-right">
              <img
                src="https://eleanboutique.ru/image/catalog/demo/theme/cat/mob/oimg/delivery-1.jpg"
                alt="img"
              />
              <p>
                Все заказы, размещенные на сайте ELEAN бережно и с любовью
                упакованы в картонную коробку и перевязанны лентой с логотипом
                бренда.
                <br />
                <br />
                Костюмы доставляются в тканевом чехле для комфортного хранения и
                перевозки. В каждый заказ вкладывается карточка с рекомендациями
                по уходу за изделиями.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Decoration;
