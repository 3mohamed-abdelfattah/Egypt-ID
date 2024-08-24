import React from 'react'
import Photo from '../assets/img/egypt.png'
export default function DefaultContent() {
    return (
        <div>
            <div style={{ fontWeight: '500', fontSize: '1em', lineHeight: '48.08px', color: ' #858585' }}>اكتب أي رقم لكي تظهر لك بعض البيانات عنه</div>
            <img style={{ width: '10vw' }} src={Photo} alt='Egypt Icon' />
        </div>
    )
}