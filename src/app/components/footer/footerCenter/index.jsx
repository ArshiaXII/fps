import React from 'react';
import * as S from "./styled";

export default function FooterCenter() {
  return (
    <div className={S.mainDiv}>
        <div className={S.col}>
            <div className={S.title}>
                Hesabım
            </div>
            <div className={S.content}>
                <ul className={S.items}>
                    <li className={S.item}>Sepetim</li>
                    <li className={S.item}>Takip Listem</li>
                    <li className={S.item}>Müşteri Destek</li>
                    <li className={S.item}>Bize Ulaşın</li>
                </ul>
            </div>
        </div>
        <div className={S.col}>
            <div className={S.title}>
                Sipariş Süreçleri
            </div>
            <div className={S.content}>
                <ul className={S.items}>
                    <li className={S.item}>İşlem Rehberi</li>
                    <li className={S.item}>Üyelik</li>
                    <li className={S.item}>Ödeme ve güvenlik</li>
                    <li className={S.item}>Kargo</li>
                    <li className={S.item}>Arızalı Ürün İşlemleri</li>
                    <li className={S.item}>Cayma Hakkı, İptal ve İade Koşulları</li>
                </ul>
            </div>
        </div>
        <div className={S.col}>
            <div className={S.title}>
                Bilgi
            </div>
            <div className={S.content}>
                <ul className={S.items}>
                    <li className={S.item}>Hakkımızda</li>
                    <li className={S.item}>Sıkça Sourlan Sorular</li>
                    <li className={S.item}>KVKK</li>
                    <li className={S.item}>Gizlilik Politikası</li>
                </ul>
            </div>
        </div>
        <div className={S.col}>
            <div className={S.title}>
                İletişim
            </div>
            <div className={S.content}>
                <ul className={S.items}>
                    <li className={S.item}>Konum: Fatih Sultan Mehmet Mahallesi,
Merkez Camii Caddesi, Bora Çıkmazı, No: 14, Kat: 1 Posta Kodu: 34771
Sarıyer / İstanbul</li>
                    <li className={S.item}>GSM: 0535 612 76 78</li>
                    <li className={S.item}>E-Posta: destek@fpsbilgisayar.com</li>
                    <li className={S.item}>Toplu Ürün Alımı için info@fpsbilgisayar.com </li>
                </ul>
            </div>
        </div>
        
        
    </div>
  )
}
