import S from './YourStylesheet.module.css'; // Siz ne kullanıyorsanız onu import edin.
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'; // Eğer React Icons kullanıyorsanız

export default function FooterTop() {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <div className={S.col}>
                    <div className={S.title}>SOSYAL MEDYA</div>
                    <div className={S.medias}>
                        <a href="https://www.instagram.com/fpsbilgisayar/" target="_blank" rel="noopener noreferrer">
                            <div className={S.icon}>
                                <FiFacebook />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/fpsbilgisayar/" target="_blank" rel="noopener noreferrer">
                            <div className={S.icon}>
                                <FiTwitter />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/fpsbilgisayar/" target="_blank" rel="noopener noreferrer">
                            <div className={S.icon}>
                                <FiInstagram />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
