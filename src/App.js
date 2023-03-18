import { Provider } from "react-redux";
import Store from "./ConfigRedux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Loader from "./Components/Loader";
import { ToastContainer } from 'react-toastify';
import NotFound from "./Components/NotFound";
const LazyproductList = React.lazy(() =>
    import("./Components/Product/ProductList")
);
const LazyFeaturedProduct = React.lazy(() =>
    import("./Components/Product/FeaturedProduct")
);
const LazyFilterproduct = React.lazy(() =>
    import("./Components/Product/Filterproduct")
);


function App() {
    return (
        <Provider store={Store}>
            <div className="App container-fluid">
                
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <React.Suspense fallback={<Loader/>}>
                                    <LazyproductList />
                                </React.Suspense>
                            }
                        ></Route>
                          <Route path='*' element={<NotFound/>} />

                        <Route
                            path="/featuredproducts"
                            element={
                                <React.Suspense fallback={<Loader/>}>
                                    <LazyFeaturedProduct />
                                </React.Suspense>
                            }
                        ></Route>
                        <Route
                            path="/materials"
                            element={
                                <React.Suspense fallback={<Loader/>}>
                                    <LazyFilterproduct />
                                </React.Suspense>
                            }
                        ></Route>
                    </Routes>
                </BrowserRouter>
                <ToastContainer />

            </div>
        </Provider>
    );
}

export default App;
