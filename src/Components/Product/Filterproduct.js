import React from "react";
import { useSelector } from "react-redux";
import LeftNavigation from "../LeftNavigation";
import Navbar from "../Navbar";
import ProductDetails from "./ProductDetails";

function Filterproduct() {
    const FiletredProduct = useSelector((state) => state.productlist);
    
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-sm-2">
                    <LeftNavigation />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        {FiletredProduct !== undefined &&
                            FiletredProduct !== null &&
                            FiletredProduct.filteredProduct.length > 0 &&
                            FiletredProduct.filteredProduct.map(
                                (productDetails) => {
                                    return (
                                        <>
                                            <ProductDetails
                                                productDetails={productDetails}
                                            />
                                        </>
                                    );
                                }
                            )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filterproduct;
