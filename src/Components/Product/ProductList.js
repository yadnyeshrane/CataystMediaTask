import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeftNavigation from "../LeftNavigation";
import Loader from "../Loader";
import Navbar from "../Navbar";
import { fetchProductList } from "./ProductAction";
import ProductDetails from "./ProductDetails";

function ProductList() {
    const dispatch = useDispatch();
    const productdata = useSelector((state) => state.productlist);
    console.log("productdata", productdata);
    useEffect(() => {
        dispatch(fetchProductList());
    }, []);

    if (productdata.loading) {
        return <Loader />;
    }
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-sm-2">
                    <LeftNavigation />
                </div>

                <div className="col-md-10">
                    <div className="row">
                        {productdata !== undefined &&
                            productdata !== null &&
                            productdata.data.length > 0 &&
                            productdata.data.map((productDetails) => {
                                return (
                                    <>
                                        <ProductDetails
                                            productDetails={productDetails}
                                        />
                                    </>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;
