import React from "react";
import { useDispatch } from "react-redux";
import Loader from "../Loader";
import { addtocart } from "./ProductAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductDetails(props) {
    const { productDetails } = props;
    const dispatch = useDispatch();

    const AddToCart = (productData) => {
        dispatch(addtocart());
        toast.success("Product added succesfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 500,
        });
        let temporyData = [];
        let count = 1;
        if (
            localStorage.getItem("produtdetails") == null ||
            localStorage.getItem("cartcount") == null
        ) {
            temporyData.push(productData);
            localStorage.setItem("produtdetails", JSON.stringify(temporyData));
            localStorage.setItem("cartcount", JSON.stringify(count));
        } else {
            temporyData = JSON.parse(localStorage.getItem("produtdetails"));

            temporyData.push(productData);
            localStorage.setItem("produtdetails", JSON.stringify(temporyData));
            count = JSON.parse(localStorage.getItem("cartcount"));
            count++;
            localStorage.setItem("cartcount", JSON.stringify(count));
        }
    };
    return (
        <>
            <div className="col-md-4" key={productDetails.id}>
                <div className="card card-container">
                    <img
                        src={productDetails.image}
                        className="image"
                        loading="lazy"
                        alt="loading"
                    />
                    <div
                        className="middle"
                        onClick={() => AddToCart(productDetails)}
                    >
                        <div className="text">Add to cart</div>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{productDetails.name}</h5>
                        <span>BLACK</span> <span>COTTON</span>
                        <div>
                            <span>INR</span>
                            <span className="mx-3">
                                {Number(productDetails.price).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
