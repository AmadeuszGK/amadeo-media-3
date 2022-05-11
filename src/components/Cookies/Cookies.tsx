import React from 'react';
import Image from 'next/image';
import { withTrans } from '../../i18n/withTrans';
import Link from 'next/link';
import CookiesImg from '../../images/Cookies.png';

type CookiesProps = {
  hideCookies: () => void;
  t: any;
};

const Cookies: React.FC<CookiesProps> = ({ hideCookies, t }) => {
  return (
    <div className="cookies">
      <div className="cookies__text">
        <div className="cookies-img">
          <Image src={CookiesImg} alt="cookies" layout="responsive" />
        </div>
        <p className="text">
          {t(`cookies.text1`)}
          <Link href="/polityka-prywatnosci">{t(`cookies.text2`)}</Link>
        </p>
      </div>
      <button className="btn" onClick={() => hideCookies()}>
        {t(`cookies.button`)}
      </button>
    </div>
  );
};

export default withTrans(Cookies);
