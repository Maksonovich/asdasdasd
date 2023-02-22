import React, { useState } from 'react'
import { TbHanger } from 'react-icons/tb'

const ContactQuestion = () => {

    const iconStyle = {
        fill: "#C0A78F",
        fontSize: "30px"
    }

    const inputStyle = {
        width: "270px",
        height: "60px",
        padding: "30px",
    }

    const [name, setName] = useState("")
    const [data, setData] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    let url = 'http://localhost:3002/showRoom'

    let handleSubmit = async (e) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: e.target[0].value,
                mobileNumber: e.target[1].value,
                data: e.target[2].value,
                message: e.target[3].value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    return (
        <div>
            <div className='ContactInner'>
                <div className='ContactShapka'>
                    <h1 className="headerContactQuestion">
                        ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ
                    </h1>
                    <TbHanger style={iconStyle} />
                </div>
                <form onSubmit={handleSubmit} >
                    <input
                        style={inputStyle}
                        value={name}
                        type="text"
                        placeholder='Введите имя'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        style={{
                            width: "270px",
                            height: "60px",
                            marginLeft: "60px",
                            padding: "30px"
                        }}
                        value={mobileNumber}
                        type="number"
                        placeholder='Введите Телефон'
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <input
                        className='formInpInfo-aidar'
                        style={{
                            height: "70px", padding: "20px",
                            marginTop: "30px"
                        }}
                        value={data}
                        type="date"
                        placeholder='Выберите удобное для вас время'
                        onChange={(e) => setData(e.target.value)}
                    />
                    <input
                        type="text"
                        style={{
                            height: "100px", resize: "none", textTransform: "uppercase", padding: "17.5px", display: "block", flexGrow: "1",
                            width: "350px",
                            marginTop: "30px"
                        }}
                        placeholder='Добавьте комментарий'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <button style={{
                        width: "182px",
                        height: "60px",
                        transform: "TranslateX(350px) translateY(-100px)"
                    }}
                        type='submit'
                        className='commentConfirmButton'>
                        ЗАПИСАТЬСЯ
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactQuestion