import { useState } from 'react';
import PromoStart from '../PromoStart'
import EnteringPhoneNumber from '../EnteringPhoneNumber'

import s from './App.module.sass';

function App() {

  const [promoPageIsActive, setPromoPageIsActive] = useState<boolean>(true)

  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        {promoPageIsActive
          ? <PromoStart setPromoPageIsActive={setPromoPageIsActive} />
          : <EnteringPhoneNumber setPromoPageIsActive={setPromoPageIsActive} />
        }
      </div>
    </main>
  );
}

export default App;
