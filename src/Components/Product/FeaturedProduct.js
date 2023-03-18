import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar";
import { fetchFeaturedProductList } from "./ProductAction";

import ProductDetails from "./ProductDetails";

function FeaturedProduct() {
    const dispatch = useDispatch();

    const FeaturedProducts = useSelector((state) => state.productlist);

    useEffect(() => {
        dispatch(fetchFeaturedProductList());
    }, [dispatch]);
    return (
        <>
            <Navbar />
            <div className="row">
                {FeaturedProducts !== undefined &&
                    FeaturedProducts !== null &&
                    FeaturedProducts.featuredproduct.length > 0 &&
                    FeaturedProducts.featuredproduct.map((productDetails) => {
                        return (
                            <>
                                <ProductDetails
                                    productDetails={productDetails}
                                />
                            </>
                        );
                    })}
            </div>
        </>
    );
}

export default FeaturedProduct;
