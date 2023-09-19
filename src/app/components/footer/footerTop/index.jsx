import React from 'react';
import * as S from "./styled";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function FooterTop() {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <div className={S.col}>
                    <div className={S.title}>SOSYAL MEDYA</div>
                    <div className={S.medias}>
                        <a href="https://www.instagram.com/fpsbilgisayar/" target="_blank" rel="noreferrer">
                            <div className={S.icon}>
                                <FiFacebook />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/fpsbilgisayar/" target="_blank" rel="noreferrer">
                            <div className={S.icon}>
                                <FiTwitter />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/fpsbilgisayar/" target="_blank" rel="noreferrer">
                            <div className={S.icon}>
                                <FiInstagram />
                            </div>
                        </a>
                    </div>
                </div>
                <div className={S.col}>
                    <div className={S.title}>E-BÜLTEN</div>
                    <div>
                        <input className={S.input} type="text" />
                        <button className={S.btn}>EKLE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
