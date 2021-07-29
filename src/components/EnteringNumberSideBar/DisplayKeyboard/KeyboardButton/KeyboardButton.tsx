import { FC } from 'react';
import s from './KeyboardButton.module.sass';

interface KeyboardButtonProps {
    number: number | string;
    btnType: 'reset' | 'button'
    clearInput: any
}

const KeyboardButton: FC<KeyboardButtonProps> = ({ number, btnType, clearInput }) => {

    let btnNumber

    switch (number) {
        case 1: btnNumber = 'one';
            break;
        case 2: btnNumber = 'two';
            break;
        case 3: btnNumber = 'three';
            break;
        case 4: btnNumber = 'four';
            break;
        case 5: btnNumber = 'five';
            break;
        case 6: btnNumber = 'six';
            break;
        case 7: btnNumber = 'seven';
            break;
        case 8: btnNumber = 'eight';
            break;
        case 9: btnNumber = 'nine';
            break;
        case 0: btnNumber = 'zero';
            break;
        case 'Стереть': btnNumber = 'clear';
            break;
        default: btnNumber = '';
            break;
    }

    return (
        <button type={btnType} className={`${s.keyboardButton} ${s[btnNumber]}`} onClick={btnType === 'reset' ? clearInput : ()=> {} }>{number}</button>
    );
}

export default KeyboardButton;