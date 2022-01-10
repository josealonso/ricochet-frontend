import React, { FC, useEffect, useState } from 'react';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import ButtonNew from 'components/common/ButtonNew';
import { numFormatter } from 'utils/balances';
import { useDispatch } from 'react-redux';
import { mainCheck } from 'store/main/actionCreators';
import styles from './styles.module.scss';

interface IProps {
  account: string;
  ricBalance?: string;
  mobile?: boolean;
}

export const WalletButton: FC<IProps> = ({ ricBalance = '', account, mobile }) => {
  const dispatch = useDispatch();
  const preConnect = account === 'Connect Wallet';
  const [connecting, setConnecting] = useState(false);
  const dispatchMain = useEffect(() => {
    if (preConnect) {
      setConnecting(true);
      dispatch(mainCheck());
    }
  }, [dispatch]);
  if (!preConnect && connecting) {
    console.log(account);
    setConnecting(false);
  }
  return (
    <ButtonNew className={styles.balance_panel} onClick={dispatchMain}>
      {!mobile && (
        <div className={styles.balance}>
          {!preConnect &&
        ricBalance &&
        `${numFormatter(parseFloat(ricBalance))} RIC`}
        </div>
      )}
      <div className={styles.address}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {connecting ? 'Connecting' : (mobile ? (preConnect ? account : 'Connected') : (preConnect ? account : account.substring(0, 6)))}
      </div>
      
      <div className={styles.icon_wrap}>
        {!preConnect && (
        <FontIcon
          className={styles.icon}
          name={FontIconName.RicoUser}
          size={16}
        />
        )}
      </div>
      
    </ButtonNew>
  );
};
