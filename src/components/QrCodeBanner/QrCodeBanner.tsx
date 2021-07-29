import { FC } from 'react';

import qrCode from '../../assets/qrCode.png'
import s from './QrCodeBanner.module.sass';

interface QrCodeBannerProps {
    setPromoPageIsActive: (isActive: boolean) => void
}

const QrCodeBanner: FC<QrCodeBannerProps> = ({ setPromoPageIsActive }) => {

    return (
        <div className={s.qrCodeBanner}>
            <div className={s.wrapper}>
                <div className={s.qrCodeBanner__title}>
                    <p className={s.qrCodeBanner__titleItem}>Исполните мечту вашего малыша!</p>
                    <p className={s.qrCodeBanner__titleItem}>Подарите ему собачку!</p>
                </div>
                <div className={s.qrCodeBanner__qrCode} >
                    <img src={qrCode} alt="QR code" className={s.qrCodeBanner__qrCodeImg} />
                    <p className={s.qrCodeBanner__qrCodeDescription}>Сканируйте QR-код или нажмите ОК</p>
                </div>
                <button className={s.qrCodeBanner__btn} onClick={() => setPromoPageIsActive(false)} autoFocus>OK</button>
            </div>
        </div>
    );
}

export default QrCodeBanner;