import { FC } from 'react'
import s from './CloseButton.module.sass';

interface CloseButtonProps {
    setPromoPageIsActive: (isActive: boolean) => void
}

const CloseButton: FC<CloseButtonProps> = ({ setPromoPageIsActive }) => {
    return (
        <button type="button" className={s.closeBtn} onClick={() => setPromoPageIsActive(true)}></button>
    );
}

export default CloseButton;