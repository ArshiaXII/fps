import React from 'react';
import * as S from "./styled"

export default function index() {
  return (
    <div className={S.div}>
        <ul className={S.ul}>
            <li className='cursor-pointer py-1 '>İşlemciler</li>
            <li className='cursor-pointer py-1 '>Ekran Kartları</li>
            <li className='cursor-pointer py-1 '>Anakartlar</li>
            <li className='cursor-pointer py-1 '>Ramler</li>
            <li className='cursor-pointer py-1 '>Depolama Birimleri</li>
        </ul>
    </div>
  )
}
