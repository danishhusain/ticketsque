import { setLoadingState } from "../ReduxToolkit/features/loading";
import { ApiRequest } from "./apiRequests";
import { API_BASE_URL } from "./Base_Url";
import { showError } from "../utils/helperFunctions";

export const LogInMethod = () => async dispatch => {

    dispatch(setLoadingState(true));
    try {
        const endUrl = `${API_BASE_URL}...`;
        const method = "GET";
        const headers = {};


        try {
            const response = await ApiRequest(endUrl, method, headers);
            if (response?.status === true) {
                return response?.data;
            } else {
                showError("Login Unsuccesfull")
            }



        } catch (error) {
            showError("Login Error")
        } finally {
            dispatch(setLoadingState(false));
        }
    } catch (error) {
        showError("Login Error")

        dispatch(setLoadingState(false));
    }
};
