import { useState, useEffect } from 'react'
import { FC } from 'react';
import QrCodeBanner from '../../components/QrCodeBanner'

import video from './video/kid_and_carlson.mp4'
import s from './PromoStart.module.sass';

interface PromoStartProps {
    setPromoPageIsActive: (isActive: boolean) => void;
}

const PromoStart: FC<PromoStartProps> = ({ setPromoPageIsActive }) => {

    const [bannerVisible, setBannerVisible] = useState<boolean>(false)

    useEffect(() => {
        const timerId = setTimeout(() => setBannerVisible(true), 5000)

        return () => clearTimeout(timerId);
    }, [])
    return (
        <div className={s.promoStart}>
            <video className={s.promoStart__video} loop autoPlay muted>
                <source src={video} />
            </video>
            {bannerVisible && <QrCodeBanner setPromoPageIsActive={setPromoPageIsActive} />}
        </div>
    );
}

export default PromoStart;