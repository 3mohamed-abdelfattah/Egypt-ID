import { AiOutlineSearch } from "react-icons/ai";
import React, { Fragment } from 'react'
import style from '../assets/style/Header.module.css'
import Logo from '../assets/img/logo.svg'

export default function Header() {
    return (
        <Fragment>
            <div style={{ direction: "ltr" }}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={style.container}>
                <p className={style.head_text}>ممكن نتعرف !
                    <br />
                    <span className={style.sub_text}>من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</span>
                </p>
                <br />
                <div className={style.searchBar}>
                    <AiOutlineSearch color="#878787" size={28} style={{ marginRight: '15px' }} />
                    <input placeholder='رقم البطاقة ...' className={style.searchBar_input}></input>
                    <button className={style.searchBar_button}>إبحث</button>
                </div>
            </div>
        </Fragment>
    )
}
