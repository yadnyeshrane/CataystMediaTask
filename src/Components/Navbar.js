import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    const cartData = useSelector((state) => state.productlist);
    const location = useLocation();

    const navigate = useNavigate();
    function handleClick(pathname) {
        // navigate("/featuredproducts");
        navigate(pathname);
    }
    return (
        <>
            <div className="navigation-sticky">
                <div className="text-center py-4 px-4 bg-white">
                    <h3>MYSCHOOLSHOP.COM</h3>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li
                                className={`nav-item ${
                                    location.pathname == "/" ? "active" : ""
                                }`}
                                onClick={() => handleClick("/")}
                            >
                                <a className="nav-link">All Products</a>
                            </li>
                            <li
                                className={`nav-item ${
                                    location.pathname == "/featuredproducts"
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => handleClick("/featuredproducts")}
                            >
                                <a className="nav-link">Featured Products</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                                style={{ cursor: "pointer" }}
                            ></i>
                            <span className="mx-3">{cartData.carctcount}</span>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
