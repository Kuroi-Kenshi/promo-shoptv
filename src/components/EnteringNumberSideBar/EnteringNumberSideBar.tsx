import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { getData } from '../../utils/network';
import DisplayKeyboard from './DisplayKeyboard'

import s from './EnteringNumberSideBar.module.sass';

const EnteringNumberSideBar = () => {
    
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [agreement, setAgreement] = useState<boolean>(false)
    const [phoneNumberIsFull, setPhoneNumberIsFull] = useState<boolean>(false)
    const [formIsCompleted, setFormIsCompleted] = useState<boolean>(false)
    const [phoneNumberRecieved, setPhoneNumberRecieved] = useState<boolean>(false)
    const [phoneNumberInvalid, setPhoneNumberInvalid] = useState<boolean>(false)

    const addPhoneNumber = (e: any) => {
        // Тут не смог пока разобраться с Event'ами, чтобы inputType и data были доступны у nativeEvent. Поэтому тип any поставил.

        if (e.type === 'click') {
            if (e.nativeEvent.type === 'click' && phoneNumber.length < 10) {
                setPhoneNumber(prev => prev + e.target.childNodes[0].data)
            } 
        }

        if (e.type === 'change') {
            if (e.nativeEvent.inputType === 'deleteContentBackward') {
                setPhoneNumber(prev => prev.slice(0, -1))

                if (phoneNumberInvalid) {
                    setAgreement(false)
                    setPhoneNumberInvalid(false)
                }
                return
            }

            if (e.nativeEvent.type === 'input' && phoneNumber.length < 10) {
                setPhoneNumber(prev => prev + e.nativeEvent.data)
            }
        }
    }

    const sendData = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        getData(phoneNumber)
            .then(data => {          
                console.log(data);
                
                if (data.valid === false) {
                    setPhoneNumberInvalid(true)
                    setFormIsCompleted(false)
                } else {
                    setPhoneNumberInvalid(false)
                    setPhoneNumberRecieved(true)
                }
            })
            .catch(e => {
                console.error(e)
            })
    }

    const clearInput = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        if (phoneNumberInvalid) {
            setAgreement(false)
            setPhoneNumberInvalid(false)
        }
        setPhoneNumber('')
    }

    useEffect(() => {
        if (phoneNumber.length === 10) {
            setPhoneNumberIsFull(true)
        } else {
            setPhoneNumberIsFull(false)
        }

        if (phoneNumberIsFull && agreement) {
            setFormIsCompleted(true)
        } else {
            setFormIsCompleted(false)
        }
    }, [phoneNumber, agreement, phoneNumberIsFull])

    return (
        <section className={s.sideBar}>
            {!phoneNumberRecieved ?
                <form>
                    <div className={s.wrapper}>
                        <div className={s.sideBar__title}>
                            Введите Ваш номер мобильного телефона
                        </div>
                        <div className={s.sideBar__phoneNumber}>
                            <span className={`${s.sideBar__phoneNumberCountryCode} ${phoneNumberInvalid && s.phoneNumberInvalid}`}>+7</span>
                            <InputMask mask="(999)999-99-99" alwaysShowMask value={phoneNumber} onChange={addPhoneNumber} className={`${s.sideBar__phoneNumberInput} ${phoneNumberInvalid && s.phoneNumberInvalid}`} required autoFocus />
                        </div>
                        <div className={s.sideBar__phoneNumberText}>и с Вами свяжется наш менеждер для дальнейшей консультации</div>
                        <DisplayKeyboard addPhoneNumber={addPhoneNumber} clearInput={clearInput} />
                        {phoneNumberInvalid ? <div className={s.sideBar__invalidNumberMessage}>Неверно введен номер</div>
                            : <label className={s.sideBar__agreementLabel}>
                                <input type="checkbox" className={s.sideBar__agreementСheckbox} onClick={() => setAgreement(prev => !prev)} />
                                <span className={s.sideBar__agreementСheckboxImg}></span>
                                <p className={s.sideBar__agreementLabelText}>Согласие на обработку персональных данных</p>
                            </label>
                        }
                        <button type="submit" className={`${s.sideBar__submitBtn} ${formIsCompleted && s.active}`} disabled={!formIsCompleted} onClick={sendData}>Подтвердить номер</button>
                    </div>
                </form>

                : <div className={s.sideBar__finalText}>
                    <p className={s.sideBar__finalText_title}>Заявка <br /> принята</p>
                    <p>Держите телефон под рукой.</p>
                    <p>Скоро с Вами свяжется наш менеджер.</p>
                </div>
            }
        </section>
    );
}

export default EnteringNumberSideBar;