import React, { useState } from 'react';

import Auth from "../../modules/Auth";
import LoginRegisterForm from '../LoginRegisterForm';

function MobileMenu(props) {

    const [isModalShow, setIsModalShow] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    const loginClicked = () => {
        setIsModalShow(true);
        setIsLoginForm(true);
    };

    const registerClicked = () => {
        setIsModalShow(true);
        setIsLoginForm(false);
    };

    const showHideModal = () => {
        setIsModalShow(false);
    };

    const logout = () => {
        Auth.logout();
        window.location.reload();
    };


    return (
        <>
            <div
                className={
                    props.activeClass ? "hamburger_menu active" : "hamburger_menu"
                }
            >
                <div className="hamburger_close" onClick={props.onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="hamburger_menu_content text-right">
                    <ul className="menu_top_nav">
                        {/* <li className="menu_item has-children">
                            <a href="#">
                                usd
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="menu_selection">
                                <li>
                                    <a href="#">cad</a>
                                </li>
                                <li>
                                    <a href="#">aud</a>
                                </li>
                                <li>
                                    <a href="#">eur</a>
                                </li>
                                <li>
                                    <a href="#">gbp</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu_item has-children">
                            <a href="#">
                                English
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="menu_selection">
                                <li>
                                    <a href="#">French</a>
                                </li>
                                <li>
                                    <a href="#">Italian</a>
                                </li>
                                <li>
                                    <a href="#">German</a>
                                </li>
                                <li>
                                    <a href="#">Spanish</a>
                                </li>
                            </ul>
                        </li> */}
                        <li className="menu_item has-children">
                            <a className='mobile-menu-login' href="#">
                                My Account
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="menu_selection">
                                {Auth.getUserDetails() !== undefined &&
                                    Auth.getUserDetails() !== null &&
                                    Auth.getToken() !== undefined ? (

                                    <li>
                                        <a href="#" onClick={() => logout()}>
                                            <i
                                                className="fas fa-sign-in-alt"
                                                aria-hidden="true"
                                            ></i>
                                            Logout
                                        </a>
                                    </li>
                                ) : (<>
                                    <li>
                                        <a onClick={loginClicked} href="#">
                                            Sign In
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={registerClicked} href="#">
                                            Register
                                        </a>
                                    </li></>)
                                }
                            </ul>
                        </li>
                        <li className="menu_item">
                            <a href="/">home</a>
                        </li>
                        <li className="menu_item">
                            <a href="/shops/Women">shop</a>
                        </li>
                        <li className="menu_item">
                            <a href="#">promotion</a>
                        </li>
                        <li className="menu_item">
                            <a href="#">pages</a>
                        </li>
                        <li className="menu_item">
                            <a href="#">blog</a>
                        </li>
                        <li className="menu_item">
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <LoginRegisterForm
                show={isModalShow}
                login={isLoginForm}
                registerClicked={() => registerClicked()}
                loginClicked={() => loginClicked()}
                onHide={() => showHideModal()}
            />
        </>
    )
}

export default MobileMenu