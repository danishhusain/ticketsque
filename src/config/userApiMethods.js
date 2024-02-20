import { setLoadingState } from "../ReduxToolkit/features/loading";
import { showError } from "../utils/helperFunctions";
import { API_BASE_URL } from "./Base_Url";
import { ApiRequest } from "./apiRequests";

export const TestMethod = () => async dispatch => {

    dispatch(setLoadingState(true));
    try {
        const endUrl = `${API_BASE_URL}`;
        const method = "GET";
        const headers = {};


        try {
            const response = await ApiRequest(endUrl, method, headers);
            if (response?.status === true) {
                return response?.data;
            } else {
                showError("Test Unsuccesfull")
            }



        } catch (error) {
            showError("Error In Test Method")

        } finally {
            dispatch(setLoadingState(false));
        }
    } catch (error) {
        showError("Error In Test Method")
        dispatch(setLoadingState(false));
    }
};
