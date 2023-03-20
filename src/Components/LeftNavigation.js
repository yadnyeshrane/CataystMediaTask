import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchColorList } from "./Colors/ColorAction";
import { fetchMaterialList } from "./Material/MaterialAction";
import { filterMaterialProduct } from "./Product/ProductAction";

function LeftNavigation() {
    const dispatch = useDispatch();
    const MaterialList = useSelector((state) => state.material);
    const ColorLIst=useSelector((state)=>state.color);
    console.log("colorlist",ColorLIst);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchMaterialList());
        dispatch(fetchColorList());
    }, []);

    function filterMeterialProducts(id,type) {
        navigate(type);
        dispatch(filterMaterialProduct(id));
    }
    function navigatetoHomeroute()
    {
        navigate("/"); 
    }
    return (
        <>
            <div className="pt-4 ps-2 leftnaviagtion">
                <div>
                    <b>Tags</b>
                    <ul>
                        <li onClick={()=>navigatetoHomeroute()}>All</li>
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
                                                    listdata.id,"/materials"
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
                        {
                            ColorLIst!=null && ColorLIst!=undefined && ColorLIst.data.length>0 && ColorLIst.data.map((colordata)=>{
                                return(<>
                                 <li
                                            key={colordata.id}
                                            onClick={() =>
                                                filterMeterialProducts(
                                                    colordata.id,"/colors"
                                                )
                                            }
                                        >
                                            {colordata.name}
                                        </li>
                                </>)
                            })
                        }
                       
                    </ul>
                </div>
            </div>
        </>
    );
}

export default LeftNavigation;
