import { AiOutlineSearch } from "react-icons/ai";
import React, { Fragment } from 'react'
import style from '../assets/style/Header.module.css'
import Logo from '../assets/img/logo.svg'
import Curly from '../assets/img/curl-shape-l.svg'
import Gender from '../assets/img/gender.svg'
import Location from '../assets/img/location.svg'
import Birth from '../assets/img/birth.svg'

export default function Header() {
    return (
        <Fragment>
            {/*Website Logo*/}
            <div style={{ direction: "ltr" }}>
                <img src={Logo} alt="Logo" />
            </div>
            {/*Background Curl Shape*/}
            <div className={style.container}>
                <div className={style.background_container}>
                    <img src={Curly} alt="curl-shape" className={style.curl_right} />
                    <img src={Curly} alt="curl-shape" className={style.curl_left} />
                </div>
                {/*Head Text*/}
                <p className={style.head_text}>ممكن نتعرف !
                    <br />
                    <span className={style.sub_text}>من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</span>
                </p>
                <br />
                {/*Search Bar*/}
                <div className={style.searchBar}>
                    <AiOutlineSearch color="#878787" size={28} style={{ marginRight: '15px' }} />
                    <input placeholder='رقم البطاقة ...' className={style.searchBar_input}></input>
                    <button className={style.searchBar_button}>إبحث</button>
                </div>
                {/*User Info Containers*/}
                <div className={style.detail_container}>
                    <div className={style.info_box}>
                        <p>قدرنا نعرف <br />الأتي</p>
                    </div>
                    <div className={style.gender_box}>
                        <div className={style.box_head}>
                            <img src={Gender} alt="icon" className={style.box_icon} />
                            <span className={style.box_text}>النوع</span>
                        </div>
                        <hr className={style.break_line} />
                        <p className={style.inline_info}>ذكر</p>
                    </div>
                    <div className={style.location_box}>
                        <div className={style.box_head}>
                            <img src={Location} alt="icon" className={style.box_icon} />
                            <span className={style.box_text}>محل الإقامة</span>
                        </div>
                        <hr className={style.break_line} />
                        <p className={style.inline_info}>بني سويف</p>
                    </div>
                    <div className={style.birth_box}>
                        <div className={style.box_head}>
                            <img src={Birth} alt="icon" className={style.box_icon} />
                            <span className={style.box_text}>تاريخ الميلاد</span>
                        </div>
                        <hr className={style.break_line} />
                        <p className={style.inline_info}>25 مايو, 2002</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
