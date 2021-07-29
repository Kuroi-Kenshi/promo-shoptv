import {FC} from 'react';
import EnteringNumberSideBar from '../../components/EnteringNumberSideBar'
import CloseButton from '../../components/CloseButton'

import QRCode from '../../assets/qrCode.png'
import s from './EnteringPhoneNumber.module.sass';

interface EnteringPhoneNumberProps {
    setPromoPageIsActive: (isActive: boolean) => void
}

const EnteringPhoneNumber:FC<EnteringPhoneNumberProps> = ({ setPromoPageIsActive }) => {
    return (
        <section className={s.EnteringPhoneNumber}>

            <EnteringNumberSideBar />
            <div className={s.EnteringPhoneNumber__rightSide}>
                <CloseButton setPromoPageIsActive={setPromoPageIsActive} />
                <div className={s.EnteringPhoneNumber__qrCode}>
                    <p className={s.EnteringPhoneNumber__qrCodeText}>Сканируйте qr-код для получения дополнительной информации</p>
                    <img className={s.EnteringPhoneNumber__qrCodeImg} src={QRCode} alt="QR Code" />
                </div>
            </div>
        </section>
    );
}


export default EnteringPhoneNumber;