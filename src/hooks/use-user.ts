import { useEffect, useState } from "react";
import { fetchData } from "../config/api";
import { UserResponse } from "../types/user-details.types";

export const useGetUserDetails = () => {

    const [isFetchingDetails, setIsFetchingDetails] = useState(false)
    const [userDetails, setUserDetails] = useState<UserResponse | null>(null);

    const url = "/data/user.json"

    useEffect(() => {
        const abortController = new AbortController();

        setIsFetchingDetails(true);
        const fetchDetails = async () => {
            try {

                const response: UserResponse = await fetchData(url, abortController.signal);
                setUserDetails(response);
            }

            catch (error) {
                console.error(error)
            }
            finally {
                setIsFetchingDetails(false);
            }
        }
        const timer = setTimeout(() => {
            fetchDetails();
        }, 2000);

        return () => {
            abortController.abort();
            clearTimeout(timer);
        }

    }, [])
    return {
        userDetails, isFetchingDetails
    };

}