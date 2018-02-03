// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Libreries

// Styles
import styles from './scss/MyAccount.scss';

const MyAccount = ({
  changeNavLoginBTNStatus,
  changeEmailInputValueState,
  changePasswordInputValueState,
  clearNavLoginFields,
  nav,
  newLoginData,
  setNewLogin,
  isMobile
}) => {
  return (
    <div className={isMobile ? `${styles.myAccount_mobile}` : `${styles.myAccount}`}>{ nav.login.btn.active
      ? (
        <form className={`${styles.login_large}`}>
          <div className={`${styles.email}`}>
            <input type="email" name="email" id="email" placeholder="Correo" onChange={e => changeEmailInputValueState(e.target.value)} />
          </div>
          <div className={`${styles.password}`}>
            <input type="password" name="password" id="password" placeholder="Clave" onChange={e => changePasswordInputValueState(e.target.value)} />
          </div>
          <div className={`${styles.buttons}`}>
            <div className={`${styles.btn_large} ${styles.entry}`} onClick={() => setNewLogin(newLoginData)}>
              <button onClick={e => e.preventDefault()}>Entrar</button>
            </div>
            <div className={`${styles.btn_circle_red} ${styles.back}`} onClick={() => {
              changeNavLoginBTNStatus();
              clearNavLoginFields();
            }}
            ><button onClick={e => e.preventDefault()}>X</button>
            </div>
          </div>
        </form>
      ) : (
        <div className={`${styles.login} ${styles.btn_success} ${styles.btn_select}`} onClick={changeNavLoginBTNStatus}>
          <div className={styles.text}>
            <span>MI CUENTA</span>
          </div>
        </div>
      )}</div>
  );
};

const mapStateToProps = state => ({
  nav: state.home.nav,
  newLoginData: state.home.nav.fields,
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({
  changeNavLoginBTNStatus() {
    setTimeout(() => dispatch({
      type: 'CHANGE_NAV_LOGIN_BTN_STATUS'
    }), 200
    );
  },
  changeEmailInputValueState(data) {
    dispatch({
      type: 'CHANGE_EMAIL_INPUT_VALUE_STATE',
      data
    });
  },
  changePasswordInputValueState(data) {
    dispatch({
      type: 'CHANGE_PASSWORD_INPUT_VALUE_STATE',
      data
    });
  },
  clearNavLoginFields() {
    dispatch({
      type: 'CLEAR_NAV_LOGIN_FIELDS'
    });
  },
  setNewLogin(data) {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

    console.log(emailValidator.test(data.email));
    console.log(passwordValidator.test(data.password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
