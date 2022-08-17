import React, { useEffect, useState} from 'react'

import TopNavBar from "../components/TopNavBar";
import NavBarContainer from "../components/NavBar/NavBarContainer";
import Footer from "../components/Footer";

function BaseLayout(props) {

    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className="super_container">
                <header className="header trans_300">
                    {isTop && <TopNavBar className="show"/> }
                    <NavBarContainer />
                </header>
                <div className="layout-container">{props.children}</div>
                <Footer />
            </div>
        </>
    )
}

export default BaseLayout