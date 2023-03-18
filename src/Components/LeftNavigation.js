import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMaterialList } from "./Material/MaterialAction";
import { filterMaterialProduct } from "./Product/ProductAction";

function LeftNavigation() {
    const dispatch = useDispatch();
    const MaterialList = useSelector((state) => state.material);

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchMaterialList());
    }, []);

    function filterMeterialProducts(id) {
        navigate("/materials");
        dispatch(filterMaterialProduct(id));
    }
    return (
        <>
            <div className="pt-4 ps-2 leftnaviagtion">
                <div>
                    <b>Tags</b>
                    <ul>
                        <li>All</li>
                        <li>Generic</li>
                        <li>Generic</li>
                        <li>Gneneric</li>
                    </ul>
                </div>
                <div>
                    <b>Materials</b>
                    <ul>
                        {MaterialList !== null &&
                            MaterialList !== undefined &&
                            MaterialList.data.length > 0 &&
                            MaterialList.data.map((listdata) => {
                                return (
                                    <>
                                        <li
                                            key={listdata.id}
                                            onClick={() =>
                                                filterMeterialProducts(
                                                    listdata.id
                                                )
                                            }
                                        >
                                            {listdata.name}
                                        </li>
                                    </>
                                );
                            })}
                    </ul>
                </div>
                <div>
                    <b>Color</b>
                    <ul>
                        <li>All</li>
                        <li>Mint Green</li>
                        <li>Blue</li>
                        <li>Red</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default LeftNavigation;
