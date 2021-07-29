import { FC } from 'react';
import KeyboardButton from './KeyboardButton';
import s from './DisplayKeyboard.module.sass';

interface DisplayKeyboardProps {
    addPhoneNumber: any
    clearInput: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DisplayKeyboard: FC<DisplayKeyboardProps> = ({ addPhoneNumber, clearInput }) => {

    const buttonsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0]

    return (
        <>
            <div className={s.displayKeyboard} onClick={addPhoneNumber}>
                {buttonsNumber.map(num => {
                    const btnType = num === 'Стереть' ? 'reset' : 'button'
                    return <KeyboardButton key={num} number={num} btnType={btnType} clearInput={clearInput} />
                })}
            </div>
        </>
    );
}

export default DisplayKeyboard;