import { async } from '@firebase/util'
import React, { useState } from 'react'
import icon from '../assets/deliver/Group 1484.svg'

const Question = () => {

    let url = "http://localhost:3002/otziv"

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    let handlesubmit = async (e) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: e.target[0].value,
                number: e.target[1].value,
                email: e.target[2].value,
                comment: e.target[3].value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    return (
        <div>
            <div className='deliver__questions'>
                <div className='deliver__questions-block'>
                    <img className='deliver__questions-icon' src={icon} alt="icon" />
                    <h2 className='deliver__questions-title'>ЗАДАТЬ ВОПРОС</h2>
                    <form className='deliver__questions-form' action='/djkama' onSubmit={handlesubmit}>
                        <div className='deliver__questions-object'><input
                            onChange={(e) => setName(e.target.value)}
                            value={name} className='deliver__questions-object_inp' type="text" placeholder='Введите имя' required /></div>
                        <div className='deliver__questions-object'><input
                            onChange={(e) => setNumber(e.target.value)}
                            value={number} className='deliver__questions-object_inp' type="number" placeholder='Введите номер' required /></div>
                        <div className='deliver__questions-object'><input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} className='deliver__questions-object_inp' type="email" placeholder='Введите свой email' required /></div>
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment} className='deliver__questions-object_textarea' name="textArea" id="" data-minLength="5" rows="3" placeholder='Сообщение'></textarea>
                    <button
                    className='deliver__questions-btn' type='submit'
                    >
                        Отправить
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question