import React from 'react'
import Photo from '../assets/img/egypt.png'
export default function DefaultContent() {
    return (
        <div>
            <p style={{ fontWeight: '500', fontSize: '18px', lineHeight: '48.08px', color: ' #858585' }}>اكتب أي رقم لكي تظهر لك بعض البيانات عنه</p>
            <img style={{ width: '30vw' }} src={Photo} />
        </div>
    )
}
