import React from 'react'
import style from '../assets/style/Footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer_bacground}>
            <p className={style.footer_text}>تقدر تبعتلنا على الإيميل بتاعنا: <a href="mailto:contact@engtechnos.com" className={style.mail}>contact@engtechnos.com</a></p>
        </div>
    )
}
