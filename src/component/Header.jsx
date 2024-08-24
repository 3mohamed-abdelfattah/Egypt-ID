import { AiOutlineSearch } from "react-icons/ai";
import React, { Fragment, useEffect, useState } from 'react'
import style from '../assets/style/Header.module.css'
import Logo from '../assets/img/logo.svg'
import Curly from '../assets/img/curl-shape-l.svg'
import Gender from '../assets/img/gender.svg'
import Location from '../assets/img/location.svg'
import Birth from '../assets/img/birth.svg'

export default function Header() {
    const [id, setID] = useState('')
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState('')

    const governorates = {
        "01": "القاهرة",
        "02": "الإسكندرية",
        "03": "بورسعيد",
        "04": "السويس",
        "11": "دمياط",
        "12": "الدقهلية",
        "13": "الشرقية",
        "14": "القليوبية",
        "15": "كفر الشيخ",
        "16": "الغربية",
        "17": "المنوفية",
        "18": "البحيرة",
        "19": "الإسماعيلية",
        "21": "الجيزة",
        "22": "بني سويف",
        "23": "الفيوم",
        "24": "المنيا",
        "25": "أسيوط",
        "26": "سوهاج",
        "27": "قنا",
        "28": "أسوان",
        "29": "الأقصر",
        "31": "البحر الأحمر",
        "32": "الوادى الجديد",
        "33": "مطروح",
        "34": "شمال سيناء",
        "35": "جنوب سيناء",
        "88": "خارج الجمهورية"
    };

    const months = {
        "01": "يناير",
        "02": "فبراير",
        "03": "مارس",
        "04": "أبريل",
        "05": "مايو",
        "06": "يونيو",
        "07": "يوليو",
        "08": "أغسطس",
        "09": "سبتمبر",
        "10": "أكتوبر",
        "11": "نوفمبر",
        "12": "ديسمبر"
    };

    const handleIDChange = (e) => {
        const value = e.target.value;
        // Must be a Number and equal 14 digits
        if (isNaN(Number(value))) {
            setError('الرقم القومي يجب أن يحتوي على أرقام فقط');
            return;
        }
        // Must less than 15 digits
        if (value.length > 14) {
            setError('الرقم القومي يجب أن يكون مكوناً من 14 رقم فقط');
            return;
        }
        // Must begins with 2 or 3 
        if (value.length > 0 && value[0] !== '2' && value[0] !== '3') {
            setError('الرقم القومي يجب أن يبدأ بالرقم 2 أو 3');
            return;
        }
        setError('');
        setID(value);
    }

    const handleSearch = () => {
        // Must equal 14 digits
        if (id.length < 14) {
            setError('الرقم القومي يجب أن يتكون من 14 رقم');
            return;
        }
        // Check if number odd or even
        if (id[12] % 2 === 0) {
            setGender('أنثى');
        } else {
            setGender('ذكر');
        }
        // Check if Government id is valid
        const governorateCode = id.substring(7, 9)
        if (!Object.keys(governorates).includes(governorateCode)) {
            setError('تحقق من الرقم القومي الصحيح');
            return;
        } else {
            setCity(governorates[governorateCode])
        }
        //Get Birthday date
        const date = id.substring(1, 7)
        const month = months[id.substring(3, 5)]
        setBirthDate(id[0] === '3' ? `${date.substring(4, 6)} ${month} 20${date.substring(0, 2)}` : `${date.substring(4, 6)} ${month} 19${date.substring(0, 2)}`)
    };

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
                    <input
                        value={id}
                        onChange={handleIDChange}
                        placeholder='رقم البطاقة ...'
                        className={style.searchBar_input} />
                    <button className={style.searchBar_button} onClick={handleSearch} disabled={!!error}>إبحث</button>
                </div>
                {error && <p className={style.errorText}>{error}</p>}
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
                        <p className={style.inline_info}>{gender ? gender : "null"}</p>
                    </div>
                    <div className={style.location_box}>
                        <div className={style.box_head}>
                            <img src={Location} alt="icon" className={style.box_icon} />
                            <span className={style.box_text}>محل الإقامة</span>
                        </div>
                        <hr className={style.break_line} />
                        <p className={style.inline_info}>{city ? city : "null"}</p>
                    </div>
                    <div className={style.birth_box}>
                        <div className={style.box_head}>
                            <img src={Birth} alt="icon" className={style.box_icon} />
                            <span className={style.box_text}>تاريخ الميلاد</span>
                        </div>
                        <hr className={style.break_line} />
                        <p className={style.inline_info}>{birthDate ? birthDate : "null"}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
