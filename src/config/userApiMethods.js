import { showMessage } from "react-native-flash-message";
import { setLoadingState } from "../ReduxToolkit/features/loading";
import { ApiRequest } from "./apiRequests";
import { addPageData, setProducts } from "../ReduxToolkit/features/productSlice";

export const TestMethod = (page = 1) => async dispatch => {
    dispatch(setLoadingState(true));
    // console.log(page)

    try {
        const endUrl = `http://3.7.230.172:8088/test/api/v1/search/recommended-item/80001/8/${page}`;
        const method = "GET";
        const headers = {};


        try {


            const response = await ApiRequest(endUrl, method, headers);
            if (response?.status === true) {
                // console.warn("TestMethod", response?.data);
                if (page === 1) {
                    dispatch(setProducts(response?.data));
                } else {

                    dispatch(addPageData(response?.data));

                }
                return response?.data;
            } else {
                throw new Error("No products found in the response");
            }



        } catch (error) {
            // console.error("TestMethod API request error:", error);
            showMessage({
                message: "Error fetching data",
                description: error.message || "Unknown error occurred",
                type: "danger",
            });
        } finally {
            dispatch(setLoadingState(false));
        }
    } catch (error) {
        // console.error("TestMethod unexpected error:", error);
        showMessage({
            message: "Error fetching data",
            description: error.message || "Unknown error occurred",
            type: "danger",
        });
        dispatch(setLoadingState(false));
    }
};
