import React from 'react'
import { TbHanger } from 'react-icons/tb'

const ContactQuestion = () => {


    const iconStyle = {
        fill: "#C0A78F",
        fontSize: "30px"
    }

    return (
        <div>
            <div className='ContactInner'>
                <div className='ContactShapka'>
                    <h1 className="headerContactQuestion">
                        ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ
                    </h1>
                    <TbHanger style={iconStyle} />
                </div>
                <form className='formInpInfo' action="FIO">
                    <input type="text" placeholder='Введите имя' />
                    <input type="number" placeholder='Введите Телефон' />
                </form>
                <form action="data">
                    <input className='formInpInfo-aidar' style={{ height: "60px", padding: "20px" }} type="date" placeholder='Выберите удобное для вас время ' />
                </form>
                <form className='formInpInfo-aidar2' action="/djkama" style={{ marginTop : "30px",display: "flex" }}>
                    <textarea  type="text" style={{ height: "100px", resize:"none",textTransform:"uppercase" , padding: "17.5px", display: "block", flexGrow: "1"}} placeholder='Добавьте комментарий' />
                    <button style={{
                        width: "182px",
                        height: "60px"
                    }} type='confirm' className='commentConfirmButton'>ЗАПИСАТЬСЯ</button>
                </form>
            </div>
        </div>
    )
}

export default ContactQuestion