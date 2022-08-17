import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import SingleProduct from "../../components/Products/SingleProduct";
import LoadingOverlay from '../../components/LoadingOverlay';
import Auth from "../../modules/Auth";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import Filter from "./components/Filter";


function Category(props) {

    const { products, applyFilters } = props;

    const [isShowLoad, setIsShowLoad ] = useState(false);
    const [isModalShow, setIsModalShow] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    useEffect(() => {
        if (!props.products) {
            props.getAllProducts();
        }
        window.scrollTo({ top: 0 });
    }, []);

    const handleShowLoad = () => {
        setTimeout(() => setIsShowLoad(false), 2000);
        setIsShowLoad(true);
    }

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

    const addToBag = params => {
        if (
            Auth.getUserDetails() !== undefined &&
            Auth.getUserDetails() !== null &&
            Auth.getToken() !== undefined
        ) {
            let cart = props.postCart(params);
            cart.then(res => {
                // console.log(res);
            });
        } else {
            setIsModalShow(true);
        }
    };

    return (
        <>
            <div className="container product_section_container">
                <div className="row">
                    <div className="col product_section clearfix">
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li className="active">
                                    <a href="#">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        {props.location.pathname.split("/")[2]}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar">
                            <Filter applyFilters={applyFilters} categoryActive={props.match.url.split("/").slice(-1)[0]} />
                        </div>
                        <div className="main_content">
                            <div className="products_iso">
                                <div className="row">
                                    <div className="col">
                                        <div className="product_sorting_container product_sorting_container_top">
                                            <ul className="product_sorting">
                                                <li>
                                                    <span className="type_sorting_text">Selection Sort</span>
                                                    <i className="fa fa-angle-down"></i>
                                                    <ul className="sorting_type">    
                                                        <li
                                                            className="type_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "Men" }'
                                                        >
                                                            <Link to={"/shops/Men"}>Men</Link>
                                                        </li>
                                                        <li
                                                            className="type_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "Woman" }'
                                                        >
                                                            <Link to={"/shops/Women"}>Women</Link>
                                                        </li>
                                                        <li
                                                            className="type_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "Kids" }'
                                                        >
                                                            <Link to={"/shops/Kids"}>Kids</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>Show</span>
                                                    <span className="num_sorting_text">6</span>
                                                    <i className="fa fa-angle-down"></i>
                                                    <ul className="sorting_num">
                                                        <li className="num_sorting_btn">
                                                            <span>6</span>
                                                        </li>
                                                        <li className="num_sorting_btn">
                                                            <span>12</span>
                                                        </li>
                                                        <li className="num_sorting_btn">
                                                            <span>24</span>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {products ?
                                        (products.filter((item, index) => {

                                            return item.department == props.match.url.split("/").slice(-1)[0];
                                        }).map((item, index) => {
                                            return (
                                                <div
                                                    className="col-lg-3 col-sm-6 col-12 mt-4"
                                                    key={index}
                                                    data-aos="zoom-in"
                                                >
                                                    <SingleProduct
                                                        productItem={item}
                                                        addToBag={addToBag}
                                                        handleShowLoad={handleShowLoad}
                                                    />
                                                </div>
                                            );
                                        })) :
                                        (<>
                                            <div className='loading-box col-lg-3 col-sm-6'>
                                                <Skeleton height={300} count={2} />
                                            </div>
                                            <div className='loading-box col-lg-3 col-sm-6'>
                                                <Skeleton height={300} count={2} />
                                            </div>
                                            <div className='loading-box col-lg-3 col-sm-6'>
                                                <Skeleton height={300} count={2} />
                                            </div>
                                            <div className='loading-box col-lg-3 col-sm-6'>
                                                <Skeleton height={300} count={2} />
                                            </div>
                                        </>)
                                    }
                                </div>
                                <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                    <div className="pages">
                                        <div className="page_current">
                                            <span>1</span>
                                            <ul className="page_selection">
                                                <li>
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li>
                                                    <a href="#">3</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="page_total">
                                            <span>of</span> 3
                                        </div>
                                        <div id="next_page_1" className="page_next">
                                            <a href="#">
                                                <i
                                                    className="fas fa-long-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginRegisterForm
                    show={isModalShow}
                    login={isLoginForm}
                    registerClicked={() => registerClicked()}
                    loginClicked={() => loginClicked()}
                    onHide={() => showHideModal()}
                />
                {!isModalShow &&
                <LoadingOverlay
                    show={isShowLoad}
                />
            }
            </div>
        </>
    )
}

export default Category